let SintJansplein = L.map('SintJansplein').setView([51.22545855, 4.41868753765475], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(SintJansplein);

let marker = L.marker([51.22545855, 4.41868753765475]).addTo(SintJansplein);
marker.bindPopup("<b>Antwerpse pleintje </b><br>Sint-Jansplein 17, Antwerp 2060, Belgium").openPopup();

let Veemarkt = L.map('Veemarkt').setView([51.2235652, 4.40036516798165
], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Veemarkt);

let apMarker = L.marker([51.2235652, 4.40036516798165]).addTo(Veemarkt);
apMarker.bindPopup("<b>Antwerpse pleintje</b><br>Antwerp 2000, Belgium").openPopup();



let SintJansvliet = L.map('SintJansvliet').setView([51.21890005, 4.39661139743164], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(SintJansvliet);

let Vmarkr = L.marker([51.21890005, 4.39661139743164]).addTo(SintJansvliet);
Vmarkr.bindPopup("<b>Antwerpse pleintje</b><br>Sint-Jansvliet 15, Antwerp 2000, Belgium").openPopup();


let Viséstraat = L.map('Viséstraat').setView([51.2279996, 4.42955084435229], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Viséstraat);

let Vimarkr = L.marker([51.2279996, 4.42955084435229]).addTo(Viséstraat);
Vimarkr.bindPopup("<b>Antwerpse pleintje</b><br>Viséstraat 90, Antwerp 2060, Belgium").openPopup();


let Damplein = L.map('Damplein').setView([51.23224050131467, 4.425092114417776], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Damplein);

let Dmarkr = L.marker([51.23224050131467, 4.425092114417776]).addTo(Damplein);
Dmarkr.bindPopup("<b>Antwerpse pleintje</b><br>Damplein 11, 2060 Antwerpen").openPopup();


let Lovelingstraat = L.map('Lovelingstraat').setView([51.219128629451674, 4.431736302761812], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Lovelingstraat);

let Wmarkr = L.marker([51.219128629451674, 4.431736302761812]).addTo(Lovelingstraat);
Wmarkr.bindPopup("<b>Antwerpse pleintje</b><br>Lovelingstraat 56, Antwerp 2060, Belgium.").openPopup();




