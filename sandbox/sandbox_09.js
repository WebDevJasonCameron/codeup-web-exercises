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

getGithubUsernames().then( users => {
    users.forEach( userObj => {
        // do something with each username
        console.log(userObj.login);
    })
}).catch(error => console.log(error));
