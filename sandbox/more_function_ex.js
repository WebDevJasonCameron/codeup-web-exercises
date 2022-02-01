console.log("Mini-Exercise!");
console.log("--------------Number 01--------------------");
/* Write a function, returnFive, that returns the number five. No inputs should be defined. */

function theFive (){
    return 5;
}
console.log(theFive());

console.log("--------------Number 02-------------------");
/**
 * Write a function, isFive, that takes in an input and returns the boolean value true
 * if the passed argument is the number 5 or the string "5". Return false otherwise.
 *
 * 1. What input does the function take in?
 *      --> the return vale of theFive
 * 2. What does the function return?
 *      --> bool
 */
function isFive(checkFive){
    return checkFive == 5;
}

console.log(isFive(theFive()));
console.log(isFive('5'));
console.log(isFive(5));
console.log(isFive('five'));

console.log("--------------Number 03-------------------");
/**
 * Write a function, isShortWord, that takes in a string and returns the
 * boolean value true if the passed argument is shorter than 5 characters.
 * Return false otherwise.
 *
 * 1. What input does the function take in? (How many inputs / type)
 *      --> a String (one)
 * 2. What does function return? (What is the type)
 *      --> bool
 */
function isShortWord(word){
    return word.length < 5;
}

console.log(isShortWord("This is my String!  It is greater than five Characters!"));
console.log(isShortWord("words"));

console.log("--------------Number 04-------------------");
/**
 * Write a function, isSameLength, that takes in two string inputs and returns the
 * boolean value true if the passed arguments are the same length. Return false otherwise.
 *
 * 1. What is the input? two string inputs
 *      --> two strings
 * 2. What is the function outputting?
 *      --> bool
 */
function isSameLength(str1, str2){
    return str1.length === str2.length;
}

console.log(isSameLength("String 01", "string 02"));

console.log("--------------Number 05-------------------");
/**
 * Write a function, getSmallerSegment, that takes in a string and a number input.
 * The function should return a substring of the first argument that is as many
 * characters long as the second argument in lowercase.
 *
 * 1. What is the input? a string and a number
 *      --> a string and number
 * 2. What is the return value? a string
 *      --> bool
 */
function getSmallerSegment(myString, num){
    return myString.substring(0, num);
}

console.log(getSmallerSegment("CaptSmash", 4));
console.log("--------------Refactor Drills-------------------");
let x = 2;
let y = 4;

let a = 5;
let b = 1;

let c = 10;
let d = 5;

function addNum(n1, n2){
    return n1 + " + " + n2 + " = " + (n1 + n2);

}
console.log(addNum(x, y));
console.log(addNum(a, b));
console.log(addNum(c, d));

console.log("--------------Function Drills-------------------");
// https://java.codeup.com/extra-exercises/javascript/functions/

// Make a function named isOdd(number)
function isOdd(num){
    if(num % 2 === 0) return false;
    else return true;
}

console.log("The number 3 is " + isOdd(3));





