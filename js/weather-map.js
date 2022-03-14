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

    // Build Card HTML
    function buildCardScript(obj){
        return '' +
            '        <div class="wx-card card mx-2"' +
            '            <div class="card-header text-center"' +
            '                <div id="wx-date" aria-label="Weather Date"' +
                                obj.dt +
            '                </div' +
            '            </div' +
            '            <div class="card-body"' +
            '                <div class="wx-temp" aria-label="temperature">' +
                                obj.temp.day +
            '               </div' +
            '                <img class="wx-img">' +
                                'IMG ICON' +
            '                </img' +
            '                <hr' +
            '                <div class="wx-description" aria-label="description">' +
            '' +
            '                   </div' +
            '                <div class="wx-humidity" aria-label="humidity">HUMIDITY</div' +
            '                <hr' +
            '                <div class="wx-wind" aria-label="wind">WIND</div' +
            '                <div class="wx-pressure" aria-label="pressure">PRESSURE</div' +
            '            </div' +
            '        </div>'
    }

    function loopThroughWxList(wxList){
        for (let i = 0; i < (wxList.length -2); i++) {
            console.log(wxList[i]);
        }
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

            loopThroughWxList(data.daily)




        }).fail(function (jqXhr, status, error) {
            console.log(jqXhr);
            console.log(status);
            console.log(error);
        })
    }


    /**
     *  TEST
     */
    getWeather();


})();

// BASE                     .daily[0]                               <--Cycle Through
// DATE:                        .dt
// DAY'S TEMP:                  .temp.day
// DESCRIPTION:                 .weather[0].description
// IMG:                         .weather[0].icon
// HUMIDITY:                    .humidity
// WIND:
//          DEG                     .wind_deg
//          SPEED                   .wind_speed
// PRESSURE:                    .pressure

