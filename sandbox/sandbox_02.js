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
    if (checkFive === 5)return true;
    else return false;
}

console.log(isFive());

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
function isShortWord(theString){
    if (theString.length < 5) return true;
    else return false;
}

console.log(isShortWord("This is my String!  It is greater than five Characters!"));

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
    if(str1.length === str2.length) return true;
    else return false;
}

console.log(isSameLength("string 01", "string 02"));

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











