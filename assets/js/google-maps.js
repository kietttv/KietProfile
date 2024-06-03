function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 10.035706, lng: 105.760316};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ninh Kieu, Can Tho' // Title Location
    });
}