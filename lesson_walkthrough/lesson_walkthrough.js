/**
 * ARRAYS  |  2022 02 08
 * @type {string[]}
 */


// // Create an array of four family members, friends, or people or pets you know
// let family = ['jason', 'miya', 'mihwa', 'calvin', 'mocha']
//
// // Console.log the first and last item
// console.log(family[0]);
//
// // Console.log a string starting your relationship to one of the array elements, for example "nathan is my cousin" or "Sofia is my friend."
// console.log("My daughter's name is " + family[1]);
//
// // Given an array
// let cities = ['San Antonio', 'Austin', 'Dallas', 'Houston'];
// // First, create a for loop that generates the output:
//
// for (let i = 0; i <cities.length; i++) {
//     console.log(cities[i]);
// }
//
// // then elaborate on the loop output to generate output like:
// for (let i = 0; i <cities.length; i++) {
//     console.log('Student number ' + (i+1) +' lives in ' + cities[i]);
// }

/**
 *Test Arrays
 */
//
// let mA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
// console.log(mA.slice(0, ((mA.length / 2) + 1)));


/**
 * Objects
 */
    "use strict";

    /*
    JS Objects

    - like a named index array
    - used to store related state and behavior
    - where arrays are good for storing lists of data, objects store related aspects of a greater structure
    - we have already used objects: String, Array, Math, Number
    */


    // Creating Objects (dog, user, forecast, dictionaryEntry, movie, post, etc.)

    // New Object Instance

    // var dog = new Object();
    // console.log(typeof dog);


    // Object Literal Notation

    // var cat = {};
    // console.log(typeof cat);

    // Setting Properties on a Custom Object

    // create a pet object that has the following properties...
    // givenName
    // age
    // species
    // hasOffspring
    // valueInDollars

    // var pet = {};
    //
    // pet.givenName = 'Sparkles';
    // pet.age = 12;
    // pet.species = 'turtle';
    // pet.hasOffspring = true;
    // pet['value-in-dollars'] = 400; // alternative syntax for assigning properties

    // console.log(pet);


    // var pet2 = {
    //     givenName: 'Rex',
    //     age: 5,
    //     species: 'dog',
    //     hasOffspring: false,
    //     valueInDollars: 'priceless'
    // };


// Peeking into an Object

    // console.log(pet);


// Accessing Properties on an Object

    // console.log(pet.givenName);
    // console.log(pet2.givenName);
    // console.log(pet2['givenName']);
    //
    // pet.givenName = "Sabrina";

    // console.log(pet.givenName);


// !! MINI-EXERCISE 1 !!



// Nested Values

    // Add the following to a pet object...
    // altNames
    // vitals: averageTemp, restingHeartRate, isHungry

    // var pet3 = {
    //     name: 'Bowser',
    //     age: 6,
    //     species: 'dog',
    //     hasOffspring: false,
    //     valueInDollars: 'priceless',
    //     altNames: [
    //         'Bowser Boy',
    //         'Bowser Man',
    //         'Bowser Buddy',
    //         'Puggle Wuggle Boy'
    //     ],
    //     vitals: {
    //         averageTempDegF: 101,
    //         averageRestingHeartRate: 80,
    //         isHungry: true
    //     }
    // };

    // log if Bowser is hungry
    // log Bowser's average heartRate
    // log Bowser's most recent alternative name
    // change age to 7 and isHungry to false

// Arrays of Objects

    // var pets = [
    //     {
    //         givenName: 'Spot',
    //         isDog: true
    //     },
    //     {
    //         givenName: 'Max',
    //         isDog: false
    //     },
    //     {
    //         givenName: 'Goldy',
    //         isDog: false
    //     }
    // ];


// !! MINI EXERCISE 2 !!


// Getting a List of Object Keys as an array

    // console.log(Object.keys(pet4));


// Assigning Functionality to an Object

    // var pet4 = {
    //     name: "Pickles",
    //     age: 20,
    //     species: "horse",
    //     eat: function (food) {
    //         console.log("nom nom nom " + food);
    //     },
    //     gallop: function() {
    //         console.log("THUNK THUMP...THUNK THUMP!");
    //     }
    // };
    //
    // pet4.eat("carrots");
    // pet4.gallop();








// The this Keyword

    // var pet6 = {
    //     name: "Sparky",
    //     age: 3,
    //     getOlder: function() {
    //         console.log(this.age);
    //         this.age += 1;
    //     }
    // };
    //
    // console.log(pet6.age);
    // pet6.getOlder();
    // console.log(pet6.age);


// why use this vs. the object name: https://stackoverflow.com/questions/12799702/javascript-this-versus-object-name


// !! MINI EXERCISE 3 !!
/**
 * Object Mini Ex
 * @type {[{givenName}]}
 */
let users = [
    {
        givenName: 'Sam',
        age: 21
    },
    {
        givenName: 'Cathy',
        age: 34
    },
    {
        givenName: 'Karen',
        age: 43
    }
];

// 1. Log the names of all users in a single console log separated by spaces. // output = “Sam
//    Cathy Karen”
function logUsers(array){
    let theList = '';                                   //   Create var to catch data from the loop
    array.forEach(function (user){
        theList = theList + ' ' + user.givenName;       //   Adds name with a space at the end
    });
    return theList.trim();
}

console.log(logUsers(users));

// 2. Change the names of all users to “John Doe”
function updateName(array){
    array.forEach(function (user){
        user.givenName = 'John Doe';
    });
}
// updateName(users)
console.log(logUsers(users));

// 3. Increase the current age of all users by 1
function updateAge(array){
    array.forEach(function (user){
        user.age = user.age + 1;
    });
}

// updateAge(users);

function showNewAge(array){
    let theList = '';
    array.forEach(function (user){
        theList = theList + ' ' + user.age;
    });
    return theList.trim();
}

console.log(showNewAge(users));



// 4. Get the total of all ages
function addAges(array){                                    //   We'll use this function in the average function later
    let ans = 0;                                            //   Set up a var to catch the sum each time we run through
                                                            // the forEach loop
    array.forEach(function (user){
        ans = ans + Number(user.age);                       //   Adding the age to our ans var.  Each time we move
    })                                                      // through the 'loop' the ans increase by the user's age
                                                            // (i.e. Sam's age: 21, Cathy's age: 34, and Karen's
                                                            // age: 43)
    return ans;                                             //   Function returns the final total in ans var
}
console.log(addAges(users));



// 5. Find average of all ages
function averageAge(array){
    return addAges(array)/ (array.length);                  //   Getting the result from addAges function and
}                                                           // dividing by the total objects within the array

console.log(averageAge(users));


// 6. Log all the user information in the following format...

    /*
        user: Sam | age: 21
        user: Cathy | age: 34
        user: Karen | age: 43
     */

function showData(array){                                   //   This is similar to the logUser function (showing
                                                            // the name of each obj in the array without the need
                                                            // for it to be on the same line)
    array.forEach(function (user){
        console.log('user: ' + user.givenName               //   String concat the name and age with the format
            + ' | age: ' + user.age);                       // according to the problem's instructions
    });
}
showData(users);

// 7. Log the name of the longest given name of a user
function getLargestName(array){
    let result = '';                                        //   Catch a name for comparisons within...
    array.forEach(function (user){
        if(user.givenName.length > result.length) {         //   If the current name we have iterated to is greater
            result = user.givenName;                        // than the name stored in our result's var, store (replace)
        }                                                   // the 'result' variable's current data with the larger
    });                                                     // name
    return result;
}

console.log(getLargestName(users));