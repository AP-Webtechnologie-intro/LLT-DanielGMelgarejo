
  
var ringlaan = L.map('ringlaan').setView([51.25404350251952, 4.456759275570227], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(ringlaan);

// Coördinaten voor de cirkel
var circleCenterRinglaan = [51.25404350251952, 4.456759275570227];
var circleRadiusRinglaan = 10; // Pas dit aan op basis van je vereisten

// Teken de cirkel in met de rode kleur
L.circle(circleCenterRinglaan, {color: "#e60005", weight: 1, radius: circleRadiusRinglaan}).addTo(ringlaan);

// Marker voor Ringlaan36
var ringlaan36Marker = L.marker([51.25404350251952, 4.456759275570227]).addTo(ringlaan);
ringlaan36Marker.bindPopup("<b>Ringlaan36, 2170 Antwerpen</b>").openPopup();


