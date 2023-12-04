/* In dit script plaats je de code om de kaart in de id Veemarkt te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.
Gebruik hiervoor de documentatie op https://leafletjs.com/ */

let Veemarkt = L.map('Veemarkt').setView([51.2235652, 4.40036516798165
], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Veemarkt);

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.2235652, 4.40036516798165]).addTo(Veemarkt);
apMarker.bindPopup("<b>AP-Veemarkt 15 </b><br>Antwerp 2000, Belgium").openPopup();







  
