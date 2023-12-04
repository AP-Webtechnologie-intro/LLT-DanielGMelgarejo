let Viséstraat = L.map('Viséstraat').setView([51.2279996, 4.42955084435229], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Viséstraat);

let Vimarkr = L.marker([51.2279996, 4.42955084435229]).addTo(Viséstraat);
Vimarkr.bindPopup("<b>Antwerpse pleintje</b><br>Viséstraat 90, Antwerp 2060, Belgium").openPopup();