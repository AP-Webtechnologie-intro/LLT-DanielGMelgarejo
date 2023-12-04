
let SintJansvliet = L.map('SintJansvliet').setView([51.21890005, 4.39661139743164], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(SintJansvliet);

let marker = L.marker([51.21890005, 4.39661139743164]).addTo(SintJansvliet);
marker.bindPopup("<b>Sint-Jansvliet</b><br>Sint-Jansvliet 15, Antwerp 2000, Belgium").openPopup();

<script src="SintJansvliet.js" defer></script>
