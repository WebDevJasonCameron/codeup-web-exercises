"use strict";

    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat: 29.4252,
        lon: -98.4916,
        appid: WEATHER_TOKEN,
        exclude: 'minutely, hourly, current, alerts',
        units: 'imperial'

    }).done(function (data){
        console.log(data);
        console.log(data.daily[3].weather[0].description)

    }).fail(function(jqXhr, status, error){
        console.log(jqXhr);
        console.log(status);
        console.log(error);
    })


