function initMap() {
    // Create a map centered at a specific location
    const location = { lat: 28.6139, lng: 77.2090 }; // Latitude and longitude (example: Delhi, India)

    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 10, // Zoom level
    });

    // Add a marker at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
