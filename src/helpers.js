import {
  PALETTES,
  HEATMAP_ZERO,
  HEATMAP_SHADES,
  CIRCLE_STEPS,
  pointSqrtCount,
  ZOOM_METHOD,
  ZOOM_STEP,
} from "./constants";
import { zip } from "./utils";

import { loadHeatLayer, loadCircleLayer } from "./layers";

export function setBodyHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

export function removeLabels(map) {
  return map.getStyle().layers.reduce(function (removed, layer) {
    if (layer.type === "symbol") map.removeLayer(layer.id);
    return [...removed, layer.id];
  }, []);
}

export function buildHeatmapDencity(palete = PALETTES.red, reverse = false) {
  const result = HEATMAP_ZERO.concat(
    zip(HEATMAP_SHADES, reverse ? palete.slice().reverse() : palete)
  );
  return result.flat();
}
export function buildCircleColors(palete = PALETTES.red, reverse = false) {
  const result = zip(CIRCLE_STEPS, reverse ? palete.slice().reverse() : palete);

  return result.flat();
}

export function getLabelsLayer(style) {
  let layers = style.layers;
  let firstSymbolId = null;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i].type === "symbol") {
      firstSymbolId = layers[i].id;
      break;
    }
  }
  return firstSymbolId;
}

export function createInteractionsSwitcher(map, interactions = "all") {
  const allInteractions = [
    "scrollZoom",
    "boxZoom",
    "dragRotate",
    "dragPan",
    "keyboard",
    "doubleClickZoom",
    "touchZoomRotate",
  ];
  const handlers = interactions === "all" ? allInteractions : interactions;
  return function (enable) {
    const operation = enable ? "enable" : "disable";
    handlers.forEach((h) => map[h][operation]());
  };
}

export const getCircleColor = (colorSteps) => [
  "interpolate",
  ["linear"],
  pointSqrtCount,
  ...colorSteps,
];

export const switchDataLayers = (id, map, before, currentDataLayers) => {
  for (let l of currentDataLayers) map.removeLayer(l);
  const heatId = loadHeatLayer(map, {
    before,
    id: `heat-${id}`,
    source: `points-${id}`,
  });
  const circlesId = loadCircleLayer(map, {
    before: `heat-${id}`,
    source: `points-${id}`,
    id: `points-${id}`,
  });
  return [heatId, circlesId];
};

const createZoomSetter = (map) => (increase) => {
  map[ZOOM_METHOD]({ zoom: map.getZoom() + increase });
};
export function bindZoomEvents(map) {
  const setZoom = createZoomSetter(map);
  document.getElementById("zoom-in").addEventListener("click", function () {
    setZoom(ZOOM_STEP);
  });
  document.getElementById("zoom-out").addEventListener("click", function () {
    setZoom(-ZOOM_STEP);
  });
}

export const createLayersKeeper = (map, keepLayers = []) => {
  let layerIds = [],
    sourceIds = [],
    before = {};
  for (let l of keepLayers) {
    layerIds.push(l.id);
    sourceIds.push(l.source || l.id);
    if (l.before) before[l.id] = l.before;
  }
  const filterLayers = ({ id }) => layerIds.some((l) => id.startsWith(l));
  const filterSources = (id) => sourceIds.some((s) => id.startsWith(s));

  return (nextStyle, onStyleChanged = () => {}) => {
    const currentStyle = map.getStyle();
    const reduceLayers = (acc, l) => ({ ...acc, [l.id]: l });
    const reduceSources = (acc, s) => ({
      ...acc,
      [s]: currentStyle.sources[s],
    });
    const dataLayers = currentStyle.layers
      .filter(filterLayers)
      .reduce(reduceLayers, {});
    const dataSources = Object.keys(currentStyle.sources)
      .filter(filterSources)
      .reduce(reduceSources, {});
    map.setStyle(nextStyle);

    map.once("styledata", () => {
      Object.keys(dataSources).forEach((s) => map.addSource(s, dataSources[s]));
      const nextLayerIds = map.getStyle().layers.map(({ id }) => id);
      const filterCurrentLayers = (id) =>
        Object.keys(dataLayers).indexOf(id) !== -1;
      layerIds.filter(filterCurrentLayers).forEach((id) => {
        const layer = dataLayers[id];
        const beforeIndex = nextLayerIds.indexOf(before[id]);
        map.addLayer(layer, beforeIndex !== -1 ? before[id] : undefined);
        nextLayerIds.push(id);
      });
      onStyleChanged(map.getStyle());
    });
  };
};
