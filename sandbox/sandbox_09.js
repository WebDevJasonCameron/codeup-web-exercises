/**
 *      USING FETCH WITH GITHUB API
 */

// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( user => {
//             // Do something with the user object
//             console.log(user);
//         })
//     })
// })

// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( user => {
//             // Do something with the user object
//             console.log(user.login);
//         })
//     })
//         .catch(error => console.error('Hey, you got an error'))
// })

// NOW STORE IT INTO A VAR

function getGithubUsernames() {
    return fetch('https://api.github.com/users')
        .then(response => response.json());
}
const outputToPage = document.getElementById('info-here');

// LIGHT BULB!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//
//         // return userObj.login
//     })
// }).catch(error => console.log(error));

// My movie glitch
// https://future-cloudy-parnip.glitch.me/movies
// ORIGIN:  'https://codeup-json-server.glitch.me/movies'

const glitchMovies = 'https://future-cloudy-parsnip.glitch.me/movies'

function getMovies() {
    return fetch(glitchMovies).then(r => r.json())
}

getMovies().then( m => {
    console.log(m)
})

