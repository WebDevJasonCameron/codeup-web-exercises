(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * 1. TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * 2. TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let tagString = planetsArray.join("<br>");
    console.log(tagString);

    // Answer <-- Later we can use this to creat HTML tags w/ text

    // Bonus Below
    let myPlanetHTMLList = planetsArray.map(function (planet){          //   Had to use ".map" ... Very new
        return "<li>" + planet + "</li>";                                      //   li around each planet
    })

    myPlanetHTMLList.unshift("<ul>");                                    //   ul around the whole array
    myPlanetHTMLList.push("</ul>");

    let myPlanetHTMLListString = myPlanetHTMLList.join("");                    //   Finally, make it a string

    console.log(myPlanetHTMLListString);

})();