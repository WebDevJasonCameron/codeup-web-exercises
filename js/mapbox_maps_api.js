(function() {
    "use strict";

    // INSTRUCTIONS:
    // 1. Generate a Mapbox API Key using the steps from above
    //    <--DONE

    // 2. Create a new file named mapbox_maps_api.html and add a
    //    map using the next steps.
    //    <-- DONE

    // 3. Generate a map that shows the city with your favorite
    //    restaurant using geocoding.
    //    <-- DONE

    // 4. Redraw the map of the above location at zoom levels 5,
    //    15, and 20. Do this by simply changing the value of zoom
    //    level where the map properties are initially set and
    //    refresh the page to see the changes. Can the zoom be
    //    changed programmatically after the initial map is drawn?
    //    <-- DONE. Yes.

    // 5. Create a marker on your map of the exact location of your
    //    favorite restaurant set the zoom to allow for best viewing
    //    distance.
    //    <-- DONE

    // 6. Create a popup with the name of the restaurant.
    //    <-- DONE

    // 7. Make sure the info window does not display until the marker
    //    has been clicked on.
    //    <-- DONE

    // 8. Refactor your code to display at least three of your favorite
    //    restaurants with information about each. Create an array of
    //    objects with information about each restaurant to accomplish
    //    this. Use a .forEach() loop rather than a for loop.
    //    <--


    mapboxgl.accessToken = MAPBOX_API_TOKEN;

    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-122.4443, 47.2529],                    // Tacoma WA
        zoom: 9
    });

    geocode('1920 Jefferson Ave, Tacoma, WA 98402', MAPBOX_API_TOKEN).then(function (result){
        $('#info-here').text(result.join(', '));
        let marker = new mapboxgl.Marker()              //   Marker set
            .setLngLat(result)
            .addTo(map);

        let popup = new mapboxgl.Popup()
            .setLngLat(result)
            .setHTML('<p>Pal-Do World Market</p>');

        marker.setPopup(popup);
    });

    let placesToEat = [
        {
            name: 'Pal-Do World Market',
            remarks: 'Have the best Korean food court im Lakewood'
            address: '9701 S Tacoma Way, Lakewood, WA 98499',
            phone: 'n/a',
            position: {
                lat: '-122.482625',
                long: '47.16914'
            }
        },
        {
            name: 'H Mart Tacoma',
            remarks: 'Biggest Korean store in Lakewood',
            address: '8720 S Tacoma Way, Lakewood, WA 98499',
            phone: '(253) 314-5066',
            position: {
                lat: '-122.48539',
                long: '47.17864'
            }
        },
        {
            name: 'The Rock Wood Fired Pizza',
            remarks: 'Great Pizza and Beer',
            address: '1920 Jefferson Ave, Tacoma, WA 98402',
            phone: ' (253) 272-1221',
            position: {
                lat: '-122.43927',
                long: '47.24414'
            }
        }
    ]



})();

