var map = L.map('map').setView([44.49, -92.13], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var polygon = L.polygon([
    [44.89253063210255, -93.26604886462177],
    [44.96481694730171, -93.00184487933889],
    [43.84509699532629, -91.11839366811226],
    [43.734995080303094, -91.26165925347138]
]).addTo(map);
polygon.bindPopup("<a href\"https://x.com/szociu8/status/1617553413222588417/photo/1\"> Route area based on twitter post</a>"); // link is not pressable lol

var Bridge = L.marker([44.74682978452913, -92.84788859684765]).addTo(map);
Bridge.bindPopup("<img src=\"https://pbs.twimg.com/media/FxuXQSYWYAIQ_dh?format=jpg&name=4096x4096\" width=\"512\" height=\"288\">", {
    maxWidth : 512
});

var RedWingStation = L.marker([44.5663224387479, -92.53713342478939]).addTo(map);
RedWingStation.bindPopup("<img src=\"https://pbs.twimg.com/media/Fx1byH3X0AAp9Lo?format=jpg&name=medium\" width=\"512\" height=\"288\">", {
    maxWidth : 512
});

var FreightHouse = L.marker([44.044610076302654, -91.64109515303265]).addTo(map);
FreightHouse.bindPopup("<img src=\"https://pbs.twimg.com/media/F1g5d15acAIVcPC?format=jpg&name=large\" width=\"512\" height=\"288\">", {
    maxWidth : 512
});

/*
var GrainTower = L.marker([41.044610076302654, -90.64109515303265]).addTo(map);
GrainTower.bindPopup("<img src=\"https://pbs.twimg.com/media/F1g5d15acAIVcPC?format=jpg&name=large\" width=\"512\" height=\"288\">", {
    maxWidth : 512
});
*/
