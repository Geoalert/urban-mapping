import { PALETTES, pointSqrtCount } from "./constants";
import {
  h,
  heatmapIntensity,
  heatmapRadius,
  heatmapOpacity,
  getHeatColors,
  getCircleColors,
} from "./constants";
import { circleOpacity, circlesLayout, circleRadius } from "./constants";

export const removeDelay = 150;
export function loadHeatLayer(
  map,
  { before, id = "gt-heat", source = "gt-points", palette = PALETTES.red }
) {
  map.addLayer(
    {
      id: id,
      type: "heatmap",
      source: source,
      "source-layer": "points",
      maxzoom: h,
      paint: {
        // Increase the heatmap weight based on frequency and property magnitude
        "heatmap-weight": [
          "interpolate",
          ["linear"],
          pointSqrtCount,
          0,
          0,
          500,
          1,
        ],
        // Increase the heatmap color weight weight by zoom level
        // heatmap-intensity is a multiplier on top of heatmap-weight
        "heatmap-intensity": heatmapIntensity,
        // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
        // Begin color ramp at 0-stop with a 0-transparancy color
        // to create a blur-like effect.
        "heatmap-color": getHeatColors(palette),
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": heatmapRadius,
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": 0,
      },
    },
    before
  );
  map.setPaintProperty(id, "heatmap-opacity", heatmapOpacity);
  // return () => {
  //   map.setPaintProperty(id, "heatmap-opacity", 0);
  //   setTimeout(() => map.removeLayer(id), removeDelay);
  // };
  return id;
}

export function loadCircleLayer(
  map,
  { before, id = "gt-points", source = "gt-points", palette = PALETTES.red }
) {
  map.addLayer(
    {
      id: id,
      type: "circle",
      source: source,
      "source-layer": "points",
      minzoom: 8,
      layout: circlesLayout,
      paint: {
        "circle-radius": circleRadius,
        "circle-color": getCircleColors(palette), //palette[0],
        "circle-stroke-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          9,
          0.1,
          12,
          1,
        ],
        "circle-stroke-color": palette[0],
        // "circle-stroke-opacity": 0,
        // "circle-opacity": 0,
      },
    },
    before
  );
  map.setPaintProperty(id, "circle-stroke-opacity", circleOpacity);
  map.setPaintProperty(id, "circle-opacity", circleOpacity);
  // return () => {
  //   map.setPaintProperty(id, "circle-opacity", 0);
  //   setTimeout(() => map.removeLayer(id), removeDelay);
  // };
  return id;
}
