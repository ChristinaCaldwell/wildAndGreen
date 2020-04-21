  
//Written by Christina Caldwell, created mainly using tutorials and quickstart guide on http://leafletjs.com/examples/quick-start/, https://esri.github.io/esri-leaflet/
//initalise map
var map = L.map('map',{
    center: [53.441001, -6.962733],
    zoom: 12,
});
//add ESRI basemap
var darkgrey=L.esri.basemapLayer('DarkGray').addTo(map);
var streets=L.esri.basemapLayer('Streets');

L.marker([53.441001, -6.962733]).addTo(map).bindPopup("<strong>Flower Farm Location</strong><br>Wild and Green Flower Farm").openPopup();

var baseLayers = {
		"Dark grey": darkgrey,
		"Streets": streets
};

L.control.layers(baseLayers).addTo(map);


