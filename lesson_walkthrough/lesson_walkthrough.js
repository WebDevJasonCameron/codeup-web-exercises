/**
 * ARRAYS  |  2022 02 08
 * @type {string[]}
 */


// Create an array of four family members, friends, or people or pets you know
let family = ['jason', 'miya', 'mihwa', 'calvin', 'mocha']

// Console.log the first and last item
console.log(family[0]);

// Console.log a string starting your relationship to one of the array elements, for example "nathan is my cousin" or "Sofia is my friend."
console.log("My daughter's name is " + family[1]);

// Given an array
let cities = ['San Antonio', 'Austin', 'Dallas', 'Houston'];
// First, create a for loop that generates the output:

for (let i = 0; i <cities.length; i++) {
    console.log(cities[i]);
}

// then elaborate on the loop output to generate output like:
for (let i = 0; i <cities.length; i++) {
    console.log('Student number ' + (i+1) +' lives in ' + cities[i]);
}

/**
 *Test Arrays
 */

let mA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
console.log(mA.slice(0, ((mA.length / 2) + 1)));



