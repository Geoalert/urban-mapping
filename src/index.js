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
  bindZoomEvents
} from "./utils";
import { loadHeatLayer, loadCircleLayer } from "./layers";
import { loadGTPointsSource, loadOSMPointsSource } from "./sources";
import {
  STYLES,
  isDevelopment,
  Tokens,
  START_EXPLORING_FLY_TIME,
  START_EXPLORING_TARGET_ZOOM,
  START_EXPLORING_TARGET_CENTER
} from "./constants";

const mapNode = document.getElementById("map");
const info = document.getElementById("footer-info");
const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
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
// const hideZoomControls = () => (controls.style.animationName = "vanishToLeft");
// const hideControls = () => (info.style.animationName = "vanishToBottom");

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
  labelsLayerId,
  currentDataLayers = [];

const accessToken = isDevelopment ? Tokens.development : Tokens.production;
setTimeout(function() {
  map = new mapboxgl.Map({
    accessToken,
    container: mapNode,
    style: "mapbox://styles/mapbox/dark-v10",
    zoom: 2.71,
    center: [83.66, 58.56],
    minZoom: 2.71,
    // hash: true,
    attributionControl: false
  });
  bindZoomEvents(map);
  switchInteractions = createInteractionsSwitcher(map);
  map.once("styledata", function() {
    removeLabels(map);
    labelsLayerId = getLabelsLayer(map.getStyle());
    loadGTPointsSource(map);
    loadOSMPointsSource(map);
    const heatId = loadHeatLayer(map, labelsLayerId, "heat-gt", "points-gt");
    const circlesId = loadCircleLayer(map, "heat-gt", "points-gt", "points-gt");
    currentDataLayers = currentDataLayers.concat([heatId, circlesId]);
    switchInteractions(false);
    map.getCanvas().style.cursor = "default";
  });
}, 100);

function startExploring() {
  hideHeader();
  hideInfo();
  showControls();
  showZoomControls();
  toggleBaseMap({ passedId: "satellite" });
  map.flyTo({
    duration: START_EXPLORING_FLY_TIME,
    zoom: START_EXPLORING_TARGET_ZOOM,
    center: START_EXPLORING_TARGET_CENTER
  });
  setTimeout(function() {
    switchInteractions(true);
    map.getCanvas().style.cursor = "";
  }, 1500);
}

const keepLayers = [
  { id: "points-gt", before: labelsLayerId },
  { id: "points-osm", before: labelsLayerId },
  { id: "heat-gt", before: labelsLayerId },
  { id: "heat-osm", before: labelsLayerId }
];
setTimeout(function() {
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
  setStyle(STYLES[id], onStyleChanged);
}
for (let t of baseMapTogglers) t.addEventListener("click", toggleBaseMap);

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
for (let t of dataLayerTogglers) t.addEventListener("click", toggleDataLayer);
