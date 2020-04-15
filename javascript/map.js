  
//Written by Christina Caldwell, created mainly using tutorials and quickstart guide on http://leafletjs.com/examples/quick-start/, https://esri.github.io/esri-leaflet/
//initalise map
var map = L.map('map',{
    center: [53.441001, -6.962733],
    zoom: 12,
});
//add ESRI basemap
L.esri.basemapLayer('DarkGray').addTo(map);

L.marker([53.441001, -6.962733]).addTo(map).bindPopup("<strong>Flower Farm Location</strong><br>Wild and Green Flower Farm").openPopup();


