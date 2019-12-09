import {
  PALETTES,
  HEATMAP_ZERO,
  HEATMAP_SHADES,
  pointSqrtCount
} from "./constants";

import { loadHeatLayer, loadCircleLayer } from "./layers";

export function removeLabels(map) {
  return map.getStyle().layers.reduce(function(removed, layer) {
    if (layer.type === "symbol") map.removeLayer(layer.id);
    return [...removed, layer.id];
  }, []);
}

export const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};

export function buildHeatmapDencity(palete = PALETTES.red, reverse = false) {
  const result = HEATMAP_ZERO.concat(
    zip(HEATMAP_SHADES, reverse ? palete.slice().reverse() : palete)
  );
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
    "touchZoomRotate"
  ];
  const handlers = interactions === "all" ? allInteractions : interactions;
  return function(enable) {
    const operation = enable ? "enable" : "disable";
    handlers.forEach(h => map[h][operation]());
  };
}

export const getCircleColor = colorSteps => [
  "interpolate",
  ["linear"],
  pointSqrtCount,
  ...colorSteps
];

export const createLayersKeeper = (map, keepLayers = []) => {
  let layerIds = [],
    sourceIds = [],
    before = {};
  for (let l of keepLayers) {
    layerIds.push(l.id);
    sourceIds.push(l.source || l.id);
    if (l.before) before[l.id] = l.before;
  }
  const filterLayers = ({ id }) => layerIds.some(l => id.startsWith(l));
  const filterSources = id => sourceIds.some(s => id.startsWith(s));
  // const filterLayers = l => layerIds.indexOf(l.id) !== -1;
  // const filterSources = id => sourceIds.indexOf(id) !== -1;
  return (nextStyle, onStyleChanged = () => {}) => {
    const currentStyle = map.getStyle();
    const dataLayers = currentStyle.layers.filter(filterLayers);
    const dataSources = Object.keys(currentStyle.sources)
      .filter(filterSources)
      .reduce(
        (acc, s) => ({
          ...acc,
          [s]: currentStyle.sources[s]
        }),
        {}
      );
    map.setStyle(nextStyle);

    map.once("styledata", () => {
      const style = map.getStyle();
      onStyleChanged(style);
      const layers = style.layers;
      const nextLayerIds = layers.map(({ id }) => id);
      Object.keys(dataSources).forEach(s => map.addSource(s, dataSources[s]));
      dataLayers.forEach(l => {
        const boforeIndex = nextLayerIds.indexOf(before[l.id]);
        map.addLayer(l, boforeIndex !== -1 ? before[l.id] : undefined);
        layers.splice(boforeIndex, 0);
      });
    });
  };
};

export const switchDataLayers = (id, map, before, currentDataLayers) => {
  for (let l of currentDataLayers) map.removeLayer(l);
  const heatId = loadHeatLayer(map, before, `heat-${id}`, `points-${id}`);
  const circlesId = loadCircleLayer(
    map,
    `heat-${id}`,
    `points-${id}`,
    `points-${id}`
  );
  return [heatId, circlesId];
};
