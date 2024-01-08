
let Veemarkt = L.map('Veemarkt').setView([51.22342024196948, 4.400164108514011], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(Veemarkt);

var circleCenterVeemarkt = [51.22342024196948, 4.400164108514011];var circleRadiusVeemarkt = 20; 

L.circle(circleCenterVeemarkt, {color: "#e60005", weight: 1, radius: circleRadiusVeemarkt}).addTo(Veemarkt);
let VeemarktMarker = L.marker([51.22342024196948, 4.400164108514011]).addTo(Veemarkt);VeemarktMarker.bindPopup("<b>Veemarkt 15 Antwerp 2000, Belgium</b>").openPopup();



var SintJansvliet = L.map('SintJansvliet').setView([51.21861952192872, 4.396497402461873], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(SintJansvliet);

var circleCenterSintJansvliet = [51.21861952192872, 4.396497402461873];var circleRadiusSintJansvliet = 20; 

L.circle(circleCenterSintJansvliet, {color: "#e60005", weight: 1, radius: circleRadiusSintJansvliet}).addTo(SintJansvliet);

var SintJansvlietMarker = L.marker([51.21861952192872, 4.396497402461873]).addTo(SintJansvliet);SintJansvlietMarker.bindPopup("<b>Sint-Jansvliet 15, Antwerp 2000, Belgium</b>").openPopup();


var Viséstraat = L.map('Viséstraat').setView([51.2284271520852, 4.429157392680716], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Viséstraat);

        
var circleCenterViséstraat = [51.2284271520852, 4.429157392680716];
var circleRadiusViséstraat = 20; 

        
L.circle(circleCenterViséstraat, {color: "#e60005", weight: 1, radius: circleRadiusViséstraat}).addTo(Viséstraat);

        
var ViséstraatMarker = L.marker([51.2284271520852, 4.429157392680716]).addTo(Viséstraat);
ViséstraatMarker.bindPopup("<b>Viséstraat 90, Antwerp 2060, Belgium</b>").openPopup();

var Damplein = L.map('Damplein').setView([51.232249543501666, 4.425098663093153], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Damplein);

        
var circleCenterDamplein = [51.232249543501666, 4.425098663093153];
var circleRadiusDamplein = 20; 

   
L.circle(circleCenterDamplein, {color: "#e60005", weight: 1, radius: circleRadiusDamplein}).addTo(Damplein);

        
var DampleinMarker = L.marker([51.232249543501666, 4.425098663093153]).addTo(Damplein);
DampleinMarker.bindPopup("<b>Damplein 11, 2060 Antwerpen</b>").openPopup();



var Lovelingstraat = L.map('Lovelingstraat').setView([51.21912596067735, 4.431694698937536], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(Lovelingstraat);

var circleCenter = [51.21912596067735, 4.431694698937536];var circleRadius = 20;

L.circle(circleCenter, {color: "#e60005", weight: 1, radius: circleRadius}).addTo(Lovelingstraat);

var parallelMarker = L.marker([51.21912596067735, 4.431694698937536]).addTo(Lovelingstraat);parallelMarker.bindPopup("<b>Lovelingstraat 56, Antwerp 2060, Belgium</b>").openPopup();




var Sintjansplein = L.map('Sintjansplein').setView([51.225350650086554, 4.417644590919045], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(Sintjansplein);

var circleCenterSintjansplein = [51.225350650086554, 4.417644590919045];var circleRadiusSintjansplein = 50; 

L.circle(circleCenterSintjansplein, {color: "#e60005", weight: 1, radius: circleRadiusSintjansplein}).addTo(Sintjansplein);
var SintjanspleinMarker = L.marker([51.225350650086554, 4.417644590919045]).addTo(Sintjansplein);SintjanspleinMarker.bindPopup("<b> Sint-jansplein 17, 2060 Belgium</b>").openPopup();




