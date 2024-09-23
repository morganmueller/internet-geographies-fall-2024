### Take-Home Problem Set Number 1: Building a Basic Web Map with Leaflet.js

#### Overview:
In this problem set, you will create an interactive web map using Leaflet.js. You will learn to load a map, add custom markers, display popups, and integrate basic map layers. This exercise will help you understand how to build dynamic web maps, which are commonly used in fields such as geography, environmental science, and urban planning.

e external libraries (like Leaflet.js) in a web project.

#### Learning Objectives:
By the end of this problem set, you should be able to:
1. Set up a basic web map using Leaflet.js.
2. Add markers and customize their appearance.
3. Create popups for markers.
4. Use map layers to enhance map functionality.
5. Control map zoom and view settings.

---

### Part 1: Setting Up the Map

1. **Create a new HTML file**:
   Start by creating an `index.html` file. In this file, you’ll set up the basic structure for your map.

2. **Include Leaflet.js**:
   Add the following `<link>` and `<script>` tags inside the `<head>` section of your HTML file to include Leaflet’s CSS and JS libraries:
   
   ```html
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
   ```

3. **Create a `<div>` for the map**:
   In the `<body>` of your HTML file, create a container for the map:
   
   ```html
   <div id="map" style="width: 100%; height: 500px;"></div>
   ```

4. **Initialize the map**:
   After the map container, initialize the map with JavaScript. Place this code inside a `<script>` tag at the bottom of the `<body>`:

   ```html
   <script>
     var map = L.map('map').setView([40.7128, -74.0060], 13); // Coordinates for New York City

     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       maxZoom: 18,
       attribution: 'Map data © OpenStreetMap contributors'
     }).addTo(map);
   </script>
   ```

5. **Save and test**:
   Open your `index.html` file in a web browser. You should see a map of New York City displayed on the screen.

---

### Part 2: Adding Markers and Popups

1. **Add a basic marker**:
   Now, add a marker to the map at a specific location. Place the following code inside the `<script>` tag:
   
   ```html
   var marker = L.marker([40.7128, -74.0060]).addTo(map); // Marker for NYC
   ```

2. **Add a popup to the marker**:
   Make the marker interactive by adding a popup that displays when clicked:

   ```html
   marker.bindPopup("<b>Hello from NYC!</b><br>This is New York City.").openPopup();
   ```

3. **Add multiple markers**:
   Add two more markers at different locations (you can choose any cities). For example:

   ```html
   var marker1 = L.marker([34.0522, -118.2437]).addTo(map); // Los Angeles
   marker1.bindPopup("<b>Los Angeles</b><br>This is LA.");

   var marker2 = L.marker([51.5074, -0.1278]).addTo(map); // London
   marker2.bindPopup("<b>London</b><br>This is London.");
   ```

4. **Save and test**:
   When you refresh your browser, you should see three markers on your map with clickable popups.

---

### Part 3: Adding a Custom Icon

1. **Create a custom icon**:
   Instead of using the default marker, create a custom icon. Define the icon like this:

   ```html
   var customIcon = L.icon({
     iconUrl: 'https://example.com/custom-icon.png', // Replace with a URL to an image
     iconSize: [38, 38],
     iconAnchor: [22, 94],
     popupAnchor: [-3, -76]
   });
   ```

2. **Add a marker with the custom icon**:
   Place the custom icon on the map at a different location:

   ```html
   L.marker([48.8566, 2.3522], { icon: customIcon }).addTo(map).bindPopup("This is Paris with a custom icon.");
   ```

3. **Save and test**:
   Now you should see a custom marker for Paris, with a popup.

---

### Part 4: Layer Control (Bonus)

1. **Add tile layers**:
   Leaflet allows you to switch between different map layers. Add two more tile layers (satellite and topographic) using the following code:

   ```html
   var streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 18,
     attribution: 'Map data © OpenStreetMap contributors'
   });

   var satellite = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
     maxZoom: 18,
     attribution: 'Map data © OpenStreetMap contributors'
   });

   var baseMaps = {
     "Streets": streets,
     "Satellite": satellite
   };
   
   L.control.layers(baseMaps).addTo(map);
   ```

2. **Save and test**:
   You should now see a control in the top-right corner of your map that allows you to switch between the street and satellite layers.

---

### Part 5: Final Touches

- **Submit your code**: After completing the problem set, submit your `index.html` file.
- **Extra challenge**: If you'd like an extra challenge, try adding a polygon or polyline to represent a geographical area or path on the map!

---

### Grading Criteria:
1. **Basic map setup**: 5 points
2. **Markers and popups**: 5 points
3. **Custom icon implementation**: 5 points
4. **Layer control**: 5 points
5. **Code organization and style**: 5 points

Total: **25 points**

