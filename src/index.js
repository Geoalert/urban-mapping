/* globals mapboxgl */

import "./styles/styles";
// import "mapbox-gl/dist/mapbox-gl.css";
// import mapboxgl from "mapbox-gl";
import {
  removeLabels,
  getLabelsLayer,
  createInteractionsSwitcher,
  createLayersKeeper,
  switchDataLayers,
  setBodyHeight,
  bindZoomEvents,
} from "./helpers";
import { loadHeatLayer, loadCircleLayer } from "./layers";
import { loadGTPointsSource, loadOSMPointsSource } from "./sources";
import {
  STYLES,
  isDevelopment,
  Tokens,
  START_EXPLORING_FLY_TIME,
  START_EXPLORING_TARGET_ZOOM,
  START_EXPLORING_TARGET_CENTER,
  THROTTLE_SWITCH_ACTIONS_DELAY,
} from "./constants";
import { throttle } from "./utils";

const mapNode = document.getElementById("map");
const info = document.getElementById("footer-info");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
const controls = document.getElementById("footer-controls");
const zommControls = document.getElementById("zoom-controls");
const showNavbar = () => (navbar.style.animationName = "appearsFromTop");
const showHeader = () => (header.style.animationName = "appearsFromTop");
const hideHeader = () => (header.style.animationName = "vanishToTop");
const showInfo = () => (info.style.animationName = "appearsFromBottom");
const hideInfo = () => (info.style.animationName = "vanishToBottom");
const showControls = () => (controls.style.animationName = "appearsFromBottom");
const showZoomControls = () =>
  (zommControls.style.animationName = "appearsFromLeft");

const repairMapSize = () =>
  mapNode.style.setProperty("height", "calc(var(--vh, 1vh) * 100)");

setBodyHeight();
window.addEventListener("resize", setBodyHeight);

// showControls();
showInfo();
showHeader();
showNavbar();
// const hidePlacehoder = () => mapNode.classList.add("loaded");
// hidePlacehoder();

const exploreBtn = document.getElementById("explore");
exploreBtn.addEventListener("click", startExploring);

let map,
  setStyle,
  switchInteractions,
  labelsLayerId = "road-label",
  currentDataLayers = [];

const accessToken = isDevelopment ? Tokens.development : Tokens.production;
setTimeout(function () {
  map = new mapboxgl.Map({
    accessToken,
    container: mapNode,
    style: "mapbox://styles/mapbox/dark-v10",
    zoom: 2.71,
    center: [83.66, 58.56],
    minZoom: 2.71,
  });
  bindZoomEvents(map);
  switchInteractions = createInteractionsSwitcher(map);
  map.once("styledata", function () {
    labelsLayerId = getLabelsLayer(map.getStyle());
    removeLabels(map);
    loadGTPointsSource(map);
    loadOSMPointsSource(map);
    const heatId = loadHeatLayer(map, { id: "heat-gt", source: "points-gt" });
    const circlesId = loadCircleLayer(map, {
      before: "heat-gt",
      source: "points-gt",
      id: "points-gt",
    });
    currentDataLayers = currentDataLayers.concat([heatId, circlesId]);
    switchInteractions(false);
    map.getCanvas().style.cursor = "default";

    map.on("mouseenter", "points-osm", function () {
      map.getCanvas().style.cursor = "pointer";
    });
    // Change it back to a pointer when it leaves.
    map.on("mouseleave", "points-osm", function () {
      map.getCanvas().style.cursor = "";
    });
    map.on("click", "points-osm", function (e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      var population = e.features[0].properties.population_gkh;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`Population: ${population}`)
        .addTo(map);
    });
  });
}, 100);

function startExploring() {
  hideHeader();
  hideInfo();
  showControls();
  showZoomControls();
  repairMapSize();

  map.flyTo({
    duration: START_EXPLORING_FLY_TIME,
    zoom: START_EXPLORING_TARGET_ZOOM,
    center: START_EXPLORING_TARGET_CENTER,
  });
  setTimeout(() => {
    toggleBaseMap({ passedId: "satellite" });
  }, 2500);
  setTimeout(function () {
    switchInteractions(true);
    map.getCanvas().style.cursor = "";
  }, 1500);
}

let keepLayers = [
  { id: "heat-gt", before: labelsLayerId },
  { id: "points-gt", before: "heat-gt" },
  { id: "heat-osm", before: labelsLayerId },
  { id: "points-osm", before: "heat-osm" },
];
setTimeout(function () {
  setStyle = createLayersKeeper(map, keepLayers);
}, 101);

function onStyleChanged(style) {
  labelsLayerId = getLabelsLayer(style);
}

const baseMapTogglers = document.getElementsByClassName("basemap-toggle");
let prevStyleId = "dark";
function toggleBaseMap({ passedId }) {
  let id = passedId || this.id;
  if (id === prevStyleId) return;
  prevStyleId = id;
  for (let t of baseMapTogglers) t.classList.toggle("is-focused");
  labelsLayerId = getLabelsLayer(map.getStyle());
  setStyle(STYLES[id], onStyleChanged);
}
const throttleToggleBaseMap = throttle(
  toggleBaseMap,
  THROTTLE_SWITCH_ACTIONS_DELAY
);
for (let t of baseMapTogglers)
  t.addEventListener("click", throttleToggleBaseMap);

const dataLayerTogglers = document.getElementsByClassName("datalayer-toggle");
let prevLayerId = "gt";
function toggleDataLayer() {
  let id = this.id;
  if (id === prevLayerId) return;
  prevLayerId = id;
  for (let t of dataLayerTogglers) t.classList.toggle("is-focused");
  currentDataLayers = switchDataLayers(
    id,
    map,
    labelsLayerId,
    currentDataLayers
  );
}
const throttleToggleDataLayer = throttle(
  toggleDataLayer,
  THROTTLE_SWITCH_ACTIONS_DELAY
);
for (let t of dataLayerTogglers)
  t.addEventListener("click", throttleToggleDataLayer);
