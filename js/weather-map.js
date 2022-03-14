(function() {
    "use strict";

    /**
     *  ACCESS CODES
     */
    mapboxgl.accessToken = MAPBOX_API_TOKEN;

    /**
     *  MAP
     */
    // Build Map
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.4916, 29.4252],                    // Tacoma WA
        zoom: 9
    });


    /**
     *  WX
     */
    // Get WX
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat: 29.4252,
        lon: -98.4916,
        appid: WEATHER_TOKEN,
        exclude: 'minutely, hourly, current, alerts,',
        units: 'imperial'
    }).done(function (data){
        console.log(data);
    }).fail(function (jqXhr, status, error) {
        console.log(jqXhr);
        console.log(status);
        console.log(error);
    })





















})();