import { buildHeatmapDencity } from "./helpers";

export const isDevelopment = process.env.NODE_ENV === "development";
export const Tokens = {
  development:
    "pk.eyJ1IjoiZHF1bmJwIiwiYSI6ImNqd3VuaGZyeTAwYTEzeW1oeHo3NHh1cnMifQ.AzNgwn8crwuAXGPmasjlzA",
  production:
    "pk.eyJ1IjoiZHF1bmJwIiwiYSI6ImNrM3l6dnNlNjBkZXAzbXAzMjh0d2g1NDcifQ.ShlseQwBKgaBIjKKhfkg3g"
};

const stylePath = "mapbox://styles/mapbox";
export const STYLES = {
  dark: `${stylePath}/dark-v10`,
  satellite: `${stylePath}/satellite-v9`
};

export const PALETTES = {
  red: ["#FAE26B", "#DC4942", "#EA5C33", "#A82D4A", "#4E136C"]
};

export const pointSqrtCount = [
  "case",
  ["has", "sqrt_point_count"],
  ["get", "sqrt_point_count"],
  1
];

export const getHeatColors = palette => [
  "interpolate",
  ["linear"],
  ["heatmap-density"],
  ...buildHeatmapDencity(palette, true)
];

export const HEATMAP_ZERO = [0, "rgba(33,102,172,0)"];
export const HEATMAP_SHADES = [0.2, 0.4, 0.6, 0.8, 1];
export const h = 9; // heatmapDissapearingZoom
export const heatmapIntensity = [
  "interpolate",
  ["linear"],
  ["zoom"],
  0,
  2,
  h,
  4
];

export const heatmapRadius = ["interpolate", ["linear"], ["zoom"], 0, 2, h, 20];
export const heatmapOpacity = ["interpolate", ["linear"], ["zoom"], 7, 1, h, 0];

export const circleOpacity = [
  "interpolate",
  ["linear"],
  ["zoom"],
  6,
  0.5,
  15,
  1
];
export const circleRadius = ["interpolate", ["linear"], ["zoom"], 10, 2, 22, 4];
export const circlesLayout = { "circle-sort-key": pointSqrtCount };

export const THROTTLE_SWITCH_ACTIONS_DELAY = 700;
export const START_EXPLORING_FLY_TIME = 8500;
export const START_EXPLORING_TARGET_ZOOM = 15.52;
export const START_EXPLORING_TARGET_CENTER = [37.207236, 55.644778];

export const ZOOM_STEP = 2;
export const ZOOM_METHOD = "easeTo";
