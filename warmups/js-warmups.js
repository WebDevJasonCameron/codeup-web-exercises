"use strict";

// Write a function that takes in an input and returns the string "I have no idea what you just said";

function saidWhat(input){
    return "I have no idea what you just said";
}

// Write a function takes in a number and returns that number times 2 so if you give it 2
// it returns 4, if you give it 100 it returns 200
function doubleIt(num){
    return num * 2;
}

/**
 * 2022 02 08
 * @param num
 * @returns {*}
 */

// Write a function that takes in a number and return that the number plus itself
function plusItself(num){
    return num + num;
}

// Write a function that takes in two numbers, doubles each number, and then
// returns the sum of both number doubled
function twoDoublePlus(n1, n2) {
    return (n1*2) + (n2*2);
}


// Write a function that takes in a number and squares it (that is, returns
// that number multiplied by itself

function sqrItself(n) {
    return n * n;
}

//  NOTE! above could be ``` number**2

// Write a function that takes in a string and returns its length
function stringLength(str) {
    return str.length;
}

// Write a function that takes in two strings and returns the sum of their length
function stringLengthAdded(s1, s2) {
    return (s1.length) + (s2.length);
}

// Write a function that takes in a number and return the string "even" or "odd"
// depending on whether the number is even or odd
function stringEvenOrOdd(s) {
    if(s.length % 2 === 0) return "Even";
    else return "Odd";
}

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














