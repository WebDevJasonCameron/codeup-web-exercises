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

    function placeOnPage(){
        getMovieData().then(movieList => {
            let output = ''
            output = movieCardHTML(movieList[0])
            // movieList.forEach(movie => {
            //     output += movie.title;
            //     console.log(movie);
            // })
            $('#test-here').html(output);
        })
    }

    function movieCardHTML(movie){
        let output = `
            <div class="card-body">
                <div class="title">
                    ${movie.title}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        ${movie.rating}
                    </li>
                    <li class="list-group-item">
                        ${movie.id}
                    </li>
                </ul>
            </div>
            <div class="card-footer">
                <button>Delete</button>
            </div>
        `
        // console.log(output);
        $('#movie-container').html(output);
        return output;
    }
    function loopMovieList(){
        let output = `<div class="d-flex flex-column p-3 align-items-center flex-md-row justify-content-md-center">`;

        getMovieData().then(movieList => {
            for (let i = 0; i < movieList.length; i++) {
                output += movieCardHTML(movieList[i]);
            }
        })
            output += `</div>;`

    }



    /**
     *  RUN
     */
    // console.log(loopMovieList());
    $('#movie-container').html(loopMovieList());



})();                                                           // END


/**
 *      NOTES:  TRAVERSE MOVE API
 */
// STARTING OUT
// TITLE:                       .title
// RATING:                      .rating
// ID:                          .id




// BASE:                    m(i)
// ACTORS:                      .actors
// DIRECTOR:                    .director
// GENRE:                       .genre
// ID:                          .id
// DESCRIPTION:                 .plot
// POSTER:                      .poster             note... URL
// RATING:                      .rating
// TITLE:                       .title
// YEAR:                        .year











