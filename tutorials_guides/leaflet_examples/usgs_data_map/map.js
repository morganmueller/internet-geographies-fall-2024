var map = L.map('map').setView([37.8, -96], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to determine marker size based on earthquake magnitude
function getRadius(magnitude) {
    return magnitude * 5.5;
}

// Function to determine marker color based on earthquake magnitude
function getColor(magnitude) {
    return magnitude > 5 ? '#d73027' :
           magnitude > 4 ? '#fc8d59' :
           magnitude > 3 ? '#fee08b' :
           magnitude > 2 ? '#d9ef8b' :
           magnitude > 1 ? '#91cf60' :
                           '#1a9850';
}

// Function to style the GeoJSON layer
function style(feature) {
    return {
        fillColor: getColor(feature.properties.mag),
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7,
        radius: getRadius(feature.properties.mag)
    };
}

// URL to fetch recent earthquake data (past day) from USGS
//var earthquakesUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

L.geoJSON(earthquakeData, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, style(feature));
    },
    onEachFeature: function(feature, layer) {
        if (feature.properties && feature.properties.mag) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
        }
    }
}).addTo(map);


// // Fetch the earthquake data
// fetch(earthquakesUrl).then(function(response) {
//     return response.json();
// }).then(function(geoJsonData) {
//     L.geoJSON(geoJsonData, {
//         pointToLayer: function(feature, latlng) {
//             return L.circleMarker(latlng, style(feature));
//         },
//         onEachFeature: function(feature, layer) {
//             if (feature.properties && feature.properties.mag) {
//                 layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
//             }
//         }
//     }).addTo(map);
// });
