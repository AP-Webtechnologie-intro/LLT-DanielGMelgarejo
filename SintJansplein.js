


let Veemarkt = L.map('Veemarkt').setView([51.22342024196948, 4.400164108514011], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Veemarkt);

let apMarker = L.marker([51.22342024196948, 4.400164108514011]).addTo(Veemarkt);
apMarker.bindPopup("<b>Veemarkt 15 Antwerp 2000, Belgium</b>").openPopup();




let SintJansplein = L.map('SintJansplein').setView([51.22553523110052, 4.4177753492286], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(SintJansplein);

let marker = L.marker([51.22553523110052, 4.4177753492286]).addTo(SintJansplein);
marker.bindPopup("<b>Sint-Jansplein 17, Antwerp 2060, Belgium</b>").openPopup();




let SintJansvliet = L.map('SintJansvliet').setView([51.21861952192872, 4.396497402461873], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(SintJansvliet);

let Vmarkr = L.marker([51.21861952192872, 4.396497402461873]).addTo(SintJansvliet);
Vmarkr.bindPopup("<b>Sint-Jansvliet 15, Antwerp 2000, Belgium<br>").openPopup();




let Viséstraat = L.map('Viséstraat').setView([51.2284271520852, 4.429157392680716], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Viséstraat);

let Vimarkr = L.marker([51.2284271520852, 4.429157392680716]).addTo(Viséstraat);
Vimarkr.bindPopup("<b>Viséstraat 90, Antwerp 2060, Belgium</b>").openPopup();




let Damplein = L.map('Damplein').setView([51.232249543501666, 4.425098663093153], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Damplein);

let Dmarkr = L.marker([51.232249543501666, 4.425098663093153]).addTo(Damplein);
Dmarkr.bindPopup("<b>Damplein 11, 2060 Antwerpen</b>").openPopup();




let Lovelingstraat = L.map('Lovelingstraat').setView([51.21912596067735, 4.431694698937536], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Lovelingstraat);

let Wmarkr = L.marker([51.21912596067735, 4.431694698937536]).addTo(Lovelingstraat);
Wmarkr.bindPopup("<b>Lovelingstraat 56, Antwerp 2060, Belgium<br>").openPopup();




