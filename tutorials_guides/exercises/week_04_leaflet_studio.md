## Exercise: Creating an Interactive Map with Leaflet.js

### Objective:
By the end of this exercise, you will:
- Set up a basic Leaflet map.
- Add tile layers to a map.
- Mark specific points on the map with markers.
- Create pop-ups for markers.

### Prerequisites:
- Basic knowledge of HTML, CSS, and JavaScript.
- A text editor and web browser (Chrome or Firefox recommended).

---

### Boilerplate HTML File

Start by creating an HTML file called `index.html`. Here is the basic structure you will be working with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaflet Map Exercise</title>
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" />
    <style>
        #map {
            height: 500px;
            width: 100%;
        }
    </style>
</head>
<body>
    <h1>Interactive Map with Leaflet.js</h1>
    <div id="map"></div>

    <!-- Leaflet JavaScript -->
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>
    <script>
        <!-- Your JavaScript will go here -->
    </script>
</body>
</html>
```

### Instructions

---

### Step 1: Initialize the Map

- In the JavaScript section, initialize a Leaflet map.
- Use `L.map()` to create a map object and center it on a specific latitude and longitude. Start by centering the map on New York City with coordinates `[40.7128, -74.0060]`.
- Set the zoom level to 13.

**Hint:** Use `L.map('map').setView([latitude, longitude], zoomLevel)`.

---

### Step 2: Add a Tile Layer

- Next, add a tile layer to the map using OpenStreetMap tiles.
- Use the `L.tileLayer()` method to provide the tile URL and include the appropriate attribution to OpenStreetMap.
  
**Hint:** The tile URL for OpenStreetMap is:  
```
https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
```

Make sure you include the correct attribution in the options object:
```javascript
attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
```

---

### Step 3: Add a Marker

- Now, add a marker on the map to represent Central Park in NYC.
- Use the `L.marker()` method with the coordinates `[40.785091, -73.968285]` to place the marker on the map.
- Add the marker to your map using the `.addTo()` method.

**Hint:** Example format:  
```javascript
L.marker([latitude, longitude]).addTo(map);
```

---

### Step 4: Bind a Popup to the Marker

- Create a popup that will display information when the Central Park marker is clicked.
- Use the `.bindPopup()` method to add a popup with the text "Central Park - A large public park in NYC."
  
**Hint:** You can chain `.bindPopup()` directly to the marker creation.

---

### Step 5: Add More Markers

- Add markers for **Times Square** (`[40.758896, -73.985130]`) and **Statue of Liberty** (`[40.689247, -74.044502]`).
- Create appropriate popups for each marker.

For example:
- **Times Square:** "Times Square - Famous for its Broadway theaters and neon lights."
- **Statue of Liberty:** "Statue of Liberty - A symbol of freedom in the USA."

---

### Step 6: Explore (Optional Challenge)

- Add two more locations of your choice on the map. You can pick any city or landmark in the world.
- Customize the popup text with interesting facts or descriptions.
- (Bonus) Try adding a custom marker icon using `L.icon()`.

---

### Conclusion

By the end of this exercise, you should have a fully functional interactive map with several markers and popups. Feel free to experiment further by adding different tile layers, zoom controls, or additional locations!