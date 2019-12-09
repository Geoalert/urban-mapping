export function loadGTPointsSource(map) {
  map.addSource("points-gt", {
    type: "vector",
    url:
      "https://demo.geoalert.io/data/GT_cluster_densest_as_needed_max25K_features_max100Kbytes.json"
  });
}
export function loadOSMPointsSource(map) {
  map.addSource("points-osm", {
    type: "vector",
    url:
      "https://demo.geoalert.io/data/OSM_cluster_densest_as_needed_max25K_features_max100Kbytes.json"
  });
}
