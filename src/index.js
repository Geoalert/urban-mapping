/* globals mapboxgl */

import "./styles/styles";
// import "mapbox-gl/dist/mapbox-gl.css";
// import mapboxgl from "mapbox-gl";
import {
  removeLabels,
  getLabelsLayer,
  createInteractionsSwitcher,
  createLayersKeeper,
  switchDataLayers
} from "./utils";
import { loadHeatLayer, loadCircleLayer } from "./layers";
import { loadGTPointsSource, loadOSMPointsSource } from "./sources";
import { STYLES, isDevelopment, Tokens } from "./constants";

const mapNode = document.getElementById("map");
const info = document.getElementById("footer-info");
const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const controls = document.getElementById("footer-controls");
const showNavbar = () => (navbar.style.animationName = "appearsFromTop");
const showHeader = () => (header.style.animationName = "appearsFromTop");
const hideHeader = () => (header.style.animationName = "vanishToTop");
const showInfo = () => (info.style.animationName = "appearsFromBottom");
const hideInfo = () => (info.style.animationName = "vanishToBottom");
const showControls = () => (controls.style.animationName = "appearsFromBottom");
const hideControls = () => (info.style.animationName = "vanishToBottom");

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
const vhValue = document.documentElement.style.getPropertyValue("--vh");
if (vhValue) document.documentElement.style.setProperty("--vh", `${vh}px`);

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
  map.flyTo({
    duration: 10000,
    zoom: 15.65,
    center: [37.162168, 55.698564]
  });
  setTimeout(function() {
    switchInteractions(true);
    map.getCanvas().style.cursor = "";
    toggleBaseMap({ passedId: "satellite" });
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
let prevStyleId;
function toggleBaseMap({ passedId }) {
  let id = passedId || this.id;
  if (id === prevStyleId) return;
  prevStyleId = id;
  for (let t of baseMapTogglers) t.classList.toggle("is-focused");
  setStyle(STYLES[id], onStyleChanged);
}
for (let t of baseMapTogglers) t.addEventListener("click", toggleBaseMap);

const dataLayerTogglers = document.getElementsByClassName("datalayer-toggle");
let prevLayerId;
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
