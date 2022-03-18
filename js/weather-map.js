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
        center: [-98.4916, 29.4252],
        zoom: 9
    });

    /**
     *  WX
     */
    // Get WX
    function getWeather(coord){
        $.get('https://api.openweathermap.org/data/2.5/onecall', {
            lat: coord[1],
            lon: coord[0],
            appid: WEATHER_TOKEN,
            exclude: 'minutely, hourly, current, alerts,',
            units: 'imperial'
        }).done(function (data){
            console.log(data.daily[0]);

            $('#wx-card-container').html(loopThroughWxList(data.daily));


        }).fail(function (jqXhr, status, error) {
            console.log(jqXhr);
            console.log(status);
            console.log(error);
        })
    }


    /**
     * Main Functions
     */
    function findOnMap(address){                                        //   Used when user inputs address
        geocode(address, MAPBOX_API_TOKEN).then(function(coords){
            tempHoldNewCoord = coords;                                  //   Temp hold coord so flyover works
            flyToLocation(tempHoldNewCoord);                            //   <--From Mapbox Tutorial "fly over"
            moveMarker(tempHoldNewCoord);
            findLocalCity(tempHoldNewCoord)
            getWeather(tempHoldNewCoord);
            gCoordinates = tempHoldNewCoord;
        })
    }
    function findLocalCity(coord){                                      //   Used when the marker changes
        reverseGeocode({lat: coord[1], lng: coord[0]}, MAPBOX_API_TOKEN).then(function (data){
            let city = data;
            city = city.replace(/[0-9]/g, '').split(', ');
            city = city[1] + ', ' + city[2];
            $('#name-of-city').text(city)
        })
    }

    function createMarker(coord){
        let marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat(coord)
            .addTo(map);


        return marker;
    }
    function moveMarker(coord){
        gMarker.setLngLat(coord);
    }


    /**
     * HELPER FUNCTIONS
     */
    // Build Card HTML
    function buildCardScript(obj){
        return `
                     <article class="wx-card card w-100 mx-2 d-flex keep-parent">
                         <div class="card-header text-center">
                             <div aria-label="Weather Date">
                                 ${transDate(obj.dt)}
                             </div>
                        </div>
                         <div class="card-body">
                            <div class="text-center" aria-label="temperature" style="font-size: 2em">
                                ${Math.round(obj.temp.day)}                           <!--TEMP-->
                                °F / 
                                ${Math.round(obj.temp.night)} 
                                °F     
                            </div>
                             <div class="wx-img text-center">
                                                                                       <!--ICON-->
             <img src="http://openweathermap.org/img/w/${obj.weather[0].icon}.png" alt="current weather">
                                    
                             </div>
            <hr>
                             <div class="mx-3 py-2" aria-label="description">
                               Description: <br>
                                <b>
                                    ${obj.weather[0].description}                       <!--DESCRIPTION-->
                               </b>
                            </div>
                            <div class="mx-3" aria-label="humidity">
                               Humidity:
                               <b>
                                    ${obj.humidity}                                      <!--HUMIDITY-->
                               </b>
                            </div>
            <hr>
                            <div class="mx-3 py-2" aria-label="wind">
                               Wind:
                               <b>
                                   ${obj.wind_deg}° | ${Math.round(obj.wind_speed)} mph  <!--WIND-->
                               </b>
                            </div>
                            <div class="mx-3" aria-label="pressure">
                               Pressure: 
                               <b>
                                   ${obj.pressure}                                       <!--WIND-->
                               </b>
                            </div>
                        </div>
                        <button class="details-btn btn active day-btn" data-toggle="modal" data-target="#wx-modal-1">
                           Details
                        </button>
                    </article>`
    }
    function buildCardContainerScript(str){
        return `
                <div class="d-flex flex-column p-3 align-items-center flex-md-row justify-content-md-center">
                   ${str}
                </div>`
    }
    function buildModalScript(obj){

    }

    // Loop through 5Day Forecast
    function loopThroughWxList(wxList){
        let output = ''
        for (let i = 0; i < (wxList.length -3); i++) {
            output += buildCardScript(wxList[i]);
        }
        output = buildCardContainerScript(output)
        return output;
    }

    // Translates Unix Time Stamp to Normal date
    function transDate(unixTimeStamp){
        let date = new Date(unixTimeStamp * 1000).toDateString();
        return date
    }

    // Fly to location
    function flyToLocation(newCoord){
        const target = isAtStart ? newCoord : gCoordinates;
        isAtStart = !isAtStart;
        map.flyTo({
            center: target,
            zoom: 9,
            bearing: 0,
            speed: 0.5,
            curve:1,
            easing: (t) => t,
            essential: true
        });
    }

    // Toggle Map to night mode
    function toggleMap(){
        if(click % 2 === 0 ){
            map.setStyle('mapbox://styles/mapbox/streets-v11');
        } else {
            map.setStyle('mapbox://styles/mapbox/dark-v10');
        }
    }

    // Toggle Logo to night mode
    function toggleLogo(){
        if(click % 2 === 0 ){
            $('#logo-img').attr("src", "img/MoonConceptSmallPath_sun.svg");
        } else {
            $('#logo-img').attr("src", "img/MoonConceptSmallPatch_moon.svg");
        }
    }


    /**
     *  VARS, ARRAYS & OBJ
     */
    // Starting Marker Coordinators
    let gCoordinates = [-98.4916, 29.4252]
    let gMarker = createMarker(gCoordinates);
    let tempHoldNewCoord = '';                                  //   Used in Fly Over Function
    let isAtStart = true;
    let click = 1;                                              //   Used in night mode tracking


    /**
     *  EVENT LISTENERS
     */
    // Global Marker updates gCoordinates on end drag
    gMarker.on("dragend", function(data) {
        gCoordinates = [data.target._lngLat.lng, data.target._lngLat.lat];
        getWeather(gCoordinates);
        findLocalCity(gCoordinates);
    })

    // Submit Btn: Get UI address Input and run 'findOnMap' function
    $('#address-submit').click(function (){
        let address = document.getElementById('address-input').value;
        findOnMap(address);
    })

    // Enter Key: Same as above
    $('#address-input').keydown(function (e){
        if(e.keyCode === 13){
            let address = document.getElementById('address-input').value;
            findOnMap(address);
        }
    })

    // Night Mode
    $('#moon-btn').on('click', function(){
        $('.wx-card').toggleClass('night-mode');
        $('body').toggleClass('night-mode');
        $('#main-nav').toggleClass('dark-nav').toggleClass('day-nav');
        $('#main-form').toggleClass('dark-form');
        toggleMap();
        toggleLogo();
        getWeather(gCoordinates);
        click ++;
    })

    // Card calls Modal
    $('.wx-card').click(function(){
        $('wx-modal').modal('show');
    })


    /**
     *  RUN
     */
    getWeather(gCoordinates);

})();

/**
 *  WX OBJ TRAVERSE
 */
// BASE                     .daily[0]                               <--Cycle Through
// DATE:                        .dt
// TEMP:
//          DAY                     .temp.day
//          NIGHT                   .temp.night
// DESCRIPTION:                 .weather[0].description
// IMG:                         .weather[0].icon
// HUMIDITY:                    .humidity
// WIND:
//          DEG                     .wind_deg
//          SPEED                   .wind_speed
// PRESSURE:                    .pressure

/**
 * ADDITIONAL DETAILS
 */
// DEW POINT:                    .dew_point
// MOON STUFF:
//          PHASE                .moon_phase
//          SET                  .moonset
// SUN STUFF:
//          RISE                 .sunrise
//          SET                  .sunset
// FEELS LIKE:
//          DAY                  .day
//          NIGHT                .night
//          EVE                  .eve
//          MORN                 .morn