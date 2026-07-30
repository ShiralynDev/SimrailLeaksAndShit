var map = L.map('map').setView([51.75964289598423, 19.46316965563376], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var Kutno = L.marker([52.227128418612594, 19.34827021202991]).addTo(map);
Kutno.bindPopup("<img src=\"https://clan.fastly.steamstatic.com/images//38801806/243799c6c880ab63608111f2db86927a33bf4ca1.png\" width=\"512\" height=\"288\">", {
    maxWidth : 512
});

var Lowicz = L.marker([52.09305324130718, 19.946819871132764]).addTo(map);
Lowicz.bindPopup("<img src=\"https://clan.fastly.steamstatic.com/images//38801806/7718567400275ff801bf93cef3b92c06e2736555.png\" width=\"512\" height=\"288\">", {
    maxWidth : 512
});

var Witonia = L.marker([52.15692896030857, 19.27669612067632]).addTo(map);
Witonia.bindPopup("<img src=\"https://clan.fastly.steamstatic.com/images//38801806/7e90265fe501dbbba047c9589445faa83f1e7f59.png\" width=\"512\" height=\"288\">", {
    maxWidth : 512
});

var polygon = L.polygon([
    [52.246970692120435, 19.395567698191414],
    [52.12708658092156, 19.955806409849952],
    [52.09800026661646, 19.936861139531214],
    [52.2179626791865, 19.351587610041502]
]).addTo(map);
polygon.setStyle({color:'red', fillColor: '#ff0000'});
polygon.bindPopup("<img src=\"../public/Lodz3/KutnoLowicz.png\" width=\"512\" height=\"288\"> Kutno Lowicz confirmed to not be in DLC", {
    maxWidth : 512
});