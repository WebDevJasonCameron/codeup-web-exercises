"use strict";

$(document).ready(function() {

    function getSWAPIData(){
        $.ajax('https://swapi.dev/api/planets').done(function (d){
            console.log(d);
        })
    }

    getSWAPIData();

    let planets = $.ajax("https://swapi.dev/api/planets", {
        "type": "GET",
        "data": {
            "search": "Alderaan"
        }
    });

    planets.done(function(data) {
        console.log("Alderaan is " + data.results[0].climate);
    });

})
