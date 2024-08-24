

const map = L.map('mapDiv').setView([42.361145, -71.057083], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


    let locations = wirelessObj.features.map(function(antenna) {
    let location = antenna.geometry.coordinates.reverse();
    location.push(1.5);
    console.log(location)
    return location;
    });

    let heat = L.heatLayer(locations, {radius: 75}).addTo(map);
