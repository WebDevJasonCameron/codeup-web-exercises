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
    //    <-- DONE

    // BONUS:

    // 1. Info windows can contain basic HTML, not just plain text. Add
    //    some additional information about your restaurant to the popup
    //    such as why it is your favorite, dishes you like, images, etc.
    //    <--DONE

    // 2. Add a select input that allows the user to change the zoom level
    //    to 5, 15, or 20.
    //    <--DONE

    // 3. Add a text box for the user to enter an address that will use
    //    geocoding to center the map and place a marker on that location.
    //    <--DONE

    // 4. Add a button that will hide all markers.
    //    <--DONE

    // 5. Using this marker animation example as a starting point, animate
    //    a marker to bounce up and down. Alter the animation to stop after
    //    two seconds. Make the amount of bounce animation scale according
    //    to zoom level.

    // 6. Replace the generic marker icon with an image that is more
    //    appropriate for each restaurant. A tutorial for this can be found
    //    here.


    mapboxgl.accessToken = MAPBOX_API_TOKEN;

    // Build Map
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-122.4443, 47.2529],                    // Tacoma WA
        zoom: 9
    });

    // User Input address is found and placed on map
    function findOnMap(address, name){
        geocode(address, MAPBOX_API_TOKEN).then(function (cord) {
            let obj = markAndPopObj(name, address, cord);
            setMarksAndPops(obj)
            centerOnLoco(cord);
            $('#info-here').text(cord);
            console.log(obj);
        });
    }

    // Make new MarkAndPopObj
    function markAndPopObj(name, address, cord){
        return {
            name: name,
            remarks: 'User Input',
            address: address,
            phone: 'n/a',
            position: {
                lat: cord[0],
                long: cord[1]
            }
        }
    }

    // Builds both the markers and popups
    function setMarksAndPops(obj){
        let cord = [obj.position.lat, obj.position.long];
        let marker = new mapboxgl.Marker({
            color: '#F84C4C',
            }
        )
            .setLngLat(cord)
            .addTo(map);

        let popup = new mapboxgl.Popup()
            .setLngLat(cord)
            .setHTML(setPopInnerHTML(obj))

        marker.setPopup(popup);
    }

    // Adds text to the popups based on obj info
    function setPopInnerHTML(obj){
        return '<h4>' + obj.name + '</h4>' +
            '<p>Notes: ' + obj.remarks + '</p>' +
            '<p>Address: ' + obj.address + '</p>' +
            '<p>Phone: ' + obj.phone + '</p>';
    }

    // First Loop through all obj
    function loopThroughObj(objList){
        objList.forEach(function (obj){
            setMarksAndPops(obj);
        });
    }

    // Zoom controls
    function zoomControls(z){
        map.setZoom(z)
    }

    // Center on Location
    function centerOnLoco(loco){
        map.setCenter(loco)
    }

    // VARS & OBJS------------------------
    // Array of obj
    let placesToEat = [
        {
            name: 'Pal-Do World Market',
            remarks: 'Have the best Korean food court im Lakewood',
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

    // EVENT LISTENERS -------------------
    // Applies ZoomControls
    $('#zoom-selector').on('change', function (){
        zoomControls(document.getElementById('zoom-selector').value);
    })
    $('#submit-loco').click(function (){
        let address = document.getElementById('user-input-location-address').value;
        let name = document.getElementById('user-input-location-name').value;
        findOnMap(address, name)
    })
    $('#hide-points').click(function (){
        $('.mapboxgl-marker').toggleClass('hide')
    });


    // RUN -------------------------------
    loopThroughObj(placesToEat);

})();

// let locoName = 'Barnes & Noble'
// let loco = 'Lakewood Mall, 5711 Main St SW, Lakewood, WA 98499'

// 126.929962,37.555813
// 126.929962,37.555813