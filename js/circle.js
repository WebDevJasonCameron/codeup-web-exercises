(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {                                  // 1. TODO: complete this method
            this.area = Math.PI * (this.radius * 2);
            return this.area;                                   // 2. TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            if(doRounding){
                this.area = Math.round(this.getArea());
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();