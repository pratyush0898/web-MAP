function initMap() {
    let francisco = {lat: 37.77558376845853, lng: -122.42146859438208}
    let map = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom: 15,
            center: francisco,
            mapId: 'map'
        }
    )
    let marker = new AdvancedMarkerElemen({
        position: francisco,
        map: map,
        title: 'Francisco'
    })
}