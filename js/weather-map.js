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

    // 1. Set up a draggable marker
    function setMarker(){
        let marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([-98.4916, 29.4252])
            .addTo(map);
    }

    /**
     *  WX
     */
    // Get WX
    function getWeather(){
        $.get('https://api.openweathermap.org/data/2.5/onecall', {
            lat: 29.4252,
            lon: -98.4916,
            appid: WEATHER_TOKEN,
            exclude: 'minutely, hourly, current, alerts,',
            units: 'imperial'
        }).done(function (data){
            // console.log(data.daily);

            $('#wx-card-container').html(loopThroughWxList(data.daily));


        }).fail(function (jqXhr, status, error) {
            console.log(jqXhr);
            console.log(status);
            console.log(error);
        })
    }


    /**
     * HELPER FUNCTIONS
     */
    // Build Card HTML
    function buildCardScript(obj){
        return '' +
            '        <article class="wx-card card mx-2">' +
            '            <div class="card-header text-center">' +
            '                <div aria-label="Weather Date">' +
                                 transDate(obj.dt) +
            '                </div>' +
            '            </div>' +
            '            <div class="card-body">' +
            '                <div class="text-center" aria-label="temperature">' +
                                obj.temp.day + '°F / ' + obj.temp.night + '°F' +            <!--TEMP-->
            '               </div>' +
            '                <div class="wx-img text-center">' +
                                obj.weather[0].icon +                                       <!--ICON-->
            '                </div>' +
            '<hr>' +
            '                <div class="mx-3 py-2" aria-label="description">' +
            '                   Description: ' +
                                '<b>' +
                                    obj.weather[0].description   +                          <!--DESCRIPTION-->
            '                   </b>' +
            '                </div>' +
            '                <div class="mx-3" aria-label="humidity">' +
            '                   Humidity: ' +
            '                   <b>' +
                                    obj.humidity   +                                        <!--HUMIDITY-->
            '                   </b>' +
            '                </div>' +
            '<hr>' +
            '                <div class="mx-3 py-2" aria-label="wind">' +
            '                   Wind: ' +
            '                   <b>' +
                                    obj.wind_deg + '° | ' + obj.wind_speed + 'kt' +         <!--WIND-->
            '                   </b>' +
            '                </div>' +
            '                <div class="mx-3" aria-label="pressure">' +
            '                   Pressure: ' +
            '                   <b>' +
                                    obj.pressure +         <!--WIND-->
            '                   </b>' +
            '                </div>' +
            '            </div>' +
            '        </article>'
    }

    // Loop through 5Day Forecast
    function loopThroughWxList(wxList){
        let output = ''
        for (let i = 0; i < (wxList.length -3); i++) {
            console.log(wxList[i]);
            output += buildCardScript(wxList[i]);
        }
        return output
    }

    // Change Unix Time Stamp to Normal date
    function transDate(unixTimeStamp){
        let date = new Date(unixTimeStamp * 1000).toDateString();
        return date
    }




    /**
     *  EVENT LISTENERS
     */



    /**
     *  RUN
     */
    getWeather();
    setMarker();

})();

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
 * THINKING THE PROCESS OUT...
 *
 *      1. Set global Var for one Lat Long to the value of SA.
 *      2. GEO-REF to get lat long
 *      3. Set marker to start with SA GEO-REF lat long
 *      4. When address is changed in input, new GEO-REF lat long is computed
 *      5. Marker is moved (fancy animation would be nice here for transition and zoom)
 *      6.
 *
 *      ~ Should there be a global Var for one Lat Long?
 *      ~ City name could change based on its current value
 */