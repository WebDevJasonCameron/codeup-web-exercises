(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {                                  // 1. TODO: complete this method
            return Math.PI * (this.radius * 2);                 // 2. TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            let answer;

            if(doRounding){
                answer = Math.round(this.getArea());            // <-- Don't forget the function's ()
            } else {
                answer = this.getArea();
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + answer);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
                                                                // 3. TODO: Change the radius of the circle to 5.

    circle.radius = 5;                                          // <- Had to call the circle object first!

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();