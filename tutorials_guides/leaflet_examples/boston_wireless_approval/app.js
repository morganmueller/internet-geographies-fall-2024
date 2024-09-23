

const map = L.map('mapDiv').setView([42.361145, -71.057083], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let wirelessIcon = L.icon(
    {
       iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/VHF_UHF_LP-antenna.JPG',
       iconSize: [20,20]
    });

L.geoJson(wirelessObj, {
    pointToLayer: function(feature, latlng){
        let marker = L.marker(latlng,{icon: wirelessIcon});
        marker.bindPopup(feature.properties.Vendor + '<br/>' + feature.properties.Intended_Commercial_Use);
        return marker;
    }
}).addTo(map);



