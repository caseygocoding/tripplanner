const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

function buildMarker(type, coordinate) {

  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";

  if (type === 'hotels') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.hotels})`;
  } else if (type === 'restaurants') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.restaurants})`;
  } else if (type === 'activity') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.activities})`;
  }

  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinate);
}

module.exports = buildMarker;
