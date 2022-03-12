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
        center: [-98.4936, 29.4241],                    // Lincoln Memorial
        zoom: 12
    });

    geocode("Paris, Texas", MAPBOX_API_TOKEN).then(function (data){
        console.log(data);
    })




})();