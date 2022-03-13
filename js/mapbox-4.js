(function() {
    "use strict";

    // Mini - Exercise 4 (before final exercise)
    //
    // 1. Create an HTML file called mapbox-4.html centered on San Antonio
    //    that programmatically is re-centered over Zion National Park using
    //    the coordinates of the park by geocoding the physical address.
    //
    // 2. Add the latitude and longitude of Honolulu, Hawaii and use reverse
    //    geocoding to move the map to this location by geocoding inside
    //    the reverseGeocode function.

    mapboxgl.accessToken = MAPBOX_API_TOKEN;

    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.4936, 29.4241],                    // San Antonio
        zoom: 10
    });


    function goToZionLL(){
        geocode("Zion National Park", MAPBOX_API_TOKEN).then(function (data){
            $('#info-here').text('Moved to Zion National Part at the position: ' +
                data.join(' : '));
            resetLocation(data);
            map.setZoom(9)
        })
    }

    function goToHawaii(){
        reverseGeocode({lng: -155.5828, lat: 19.8968}, MAPBOX_API_TOKEN).then(function (results){
            $('#info-here').text('Moving to' + results + ' at the position 155.5828 : 19.8968');
            resetLocation([-155.5828, 19.8968]);
            map.setZoom(7);

        })
    }

    function resetLocation(position){
        console.log('reset location is here: ' + position);
        map.setCenter(position);
    }


    $('#zion-btn').click(function (){
        goToZionLL();
    })
    $('#hawaii-btn').click(function (){
        goToHawaii();
    })



})();

// 19.8968° N, 155.5828° W <-- Hawaii