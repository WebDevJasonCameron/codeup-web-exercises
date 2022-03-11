// In this kata you will create a function that takes a list of
// non-negative integers and strings and returns a new list with
// the strings filtered out.

// function filter_list(l){
//     let output = [];
//     for (let i = 0; i < l.length; i++) {
//         if(typeof l[i] !== 'string' ) output.push(l[i]);
//     }
//     return output;
// }
//
// a1 = ['1', '2', 3, 4];
// a2 = ['1', 2, 3, 4];
// a3 = [1, 2, 3, 4];
//
// console.log(filter_list(a1));
// console.log(filter_list(a2));
// console.log(filter_list(a3));


/**
 * 2022 03 04
 */

// Create a function that accepts an obj with two properties and weight, and returns the weight

// parcelWeight ({
//     parcelNumber: 1,
//     weight: 20
// })

// let parcel = {
//     parcelNumber: 1,
//     weight: 20
// }
//
// function returnParcelWeight (p) {
//     return p.weight;
// }




// Create a function that accepts an array of obj with two properties, parcelNumber and weight, and returns the total weight of all parcels

// let multipleParcels = [
//     parcel1 = {
//         parcelNumber: 1,
//         weight: 20
//     },
//     parcel2 = {
//         parcelNumber: 1,
//         weight: 20
//     }
// ]
//
// function rParcelWeight (p1, p2) {
//     console.log(p1.weight)
//     // return p1.weight + p2.weight;
// }
//
// rParcelWeight(multipleParcels[0].weight, multipleParcels[1].weight,)

// document.getElementById('#the-answers').innerText = answer;

// CONTINUE DOM WARM UP
    // Vars
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let theAnswer = document.getElementById('the-answers');
//
//     // Functions
// function sayGoodMorning(){
//     theAnswer.innerText = "Good Morning";
// }
// function sayGoodAfternoon(){
//     theAnswer.innerText= "Good Afternoon";
// }
//
//     // Listeners
// btn1.addEventListener('click', sayGoodMorning);
// btn2.addEventListener('click', sayGoodAfternoon);



// Create a function that accepts an array of obj with two properties, parcelNumber and weight, and output the content to a web page in two columns with the total listed at the end

/**
 * 2022 03 07
 */
// ================================= JS WARM UP
//
// Consider the following array of users:

    // let users = [
    //     {
    //         username: 'fsmith',
    //         email: 'fsmith@email.com',
    //         numberOfLogins: 23
    //     },
    //     {
    //         username: 'ksmith',
    //         email: 'ksmith@email.com',
    //         numberOfLogins: 100
    //     },
    //     {
    //         username: 'lsmith',
    //         email: 'lsmith@email.com',
    //         numberOfLogins: 10
    //     }
    // ];

// 1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.
//
// returnFirstUser(users) should return...

// {
//     username: 'fsmith',
//         email: 'fsmith@email.com',
//     numberOfLogins: 23
// }

// function getFirstUser(ua){
//     return ua[0]
// }
//
// console.log(getFirstUser(users));



// 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// for all users.
//
// returnTotalUserLogins(users) should return... 133
//

// function returnTotalUserLogins(ua){
//     let output = 0;
//
//     ua.forEach(function (u){
//         output = output + u.numberOfLogins;
//     });
//     return output;
// }
//
// console.log(returnTotalUserLogins(users));


// 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// user object with the highest number of logins.
//
//
// returnMostFrequentUser(users) should return...

// {
//     username: 'ksmith',
//         email: 'ksmith@email.com',
//     numberOfLogins: 100
// }

// function returnMostFrequentUser(u){
//     let mostLogs = u[0].numberOfLogins;
//     let userObj = u[0];
//     u.forEach(function (user){
//         if(user.numberOfLogins > mostLogs) {
//             mostLogs = user.numberOfLogins;
//             userObj = user;
//         }
//     });
//     return userObj
// }
//
// console.log(returnMostFrequentUser(users));
