(function() {
    "use strict";

    /**
     * VARS, ARRAYS, AND OBJ
     */
    const glitchMovies = 'https://future-cloudy-parsnip.glitch.me/movies'

    /**
     *  API ACCESS
     */
    function getMovieData() {
        return fetch(glitchMovies).then(r => r.json())
    }













    // Used to set up the app
    getMovieData().then( m => {
        console.log(m)
    })









})();                                                           // END


/**
 *      NOTES:  TRAVERSE MOVE API
 */













