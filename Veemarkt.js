let ringlaan = L.map('ringlaan').setView([51.25404350251952, 4.456759275570227], 17);  

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(ringlaan);

let ringlaan36 = L.marker([51.25404350251952, 4.456759275570227]).addTo(ringlaan);
ringlaan36.bindPopup("<b>Ringlaan36, 2170 Antwerpen</b>").openPopup();








  
