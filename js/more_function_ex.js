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
    return myString.toLowerCase().substring(0, num);
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

// 1. Make a function named isOdd(number)
function isOdd(num){
    if(num % 2 === 0) return false;
    else return true;
}
console.log("1. The number 3 is odd: " + isOdd(3));

// 2. Make a function named isEven(number)
function isEven(num){
    if(num % 2 === 0) return true;
    else return false;
}
console.log("2. The number 3 is even: " + isEven(3));

// 3. Make a function named identity(input) that returns the input exactly as provided.
function identy(input){
    return input;
}
console.log("3. You gave us " + identy("CodeUp"));

// 4. Make a function named isFive(input)
function isFive(input){
    return input == 5;
}
console.log("4. It is " + isFive(5) + " that your input was 5");

// 5. Make a function named addFive(input) that adds five to some input
function addFive(input){
    return input + 5;
}
console.log("5. You added 5 to your input and received: " + addFive(15) + " as your total");

// 6. Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input){
    return input % 5 === 0;
}
console.log("6. It is " + isMultipleOfFive(5) + " that your input is a multiple of five");

// 7. Make a function named isThree(input)
function isThree(input){
    return input == 3;
}
console.log("7. It is " + isThree(5) + " that your input was 3");

// 8. Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input){
    return input % 3 === 0;
}
console.log("8. It is " + isMultipleOfThree(27) + " that your input is a multiple of three");

// 9. Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input){
    return input % 3 === 0 && input % 5 === 0;
}
console.log("9. It is " + isMultipleOfThreeAndFive(`15`) + " that your input is a multiple of three and five");

// 10. Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(t, n){
    return t % n === 0;
}
console.log("10. It is " + isMultipleOf(100, 5) + " that the your input is a multiple of the number you provided");

// 11. Make a function named isTrue(boolean)
function isTrue(bool){
    return bool === true;
}
console.log("11. Your input returned " + isTrue(true) + " as a result!");

// 12. Make a function named isFalse(boolean)
function isFalse(bool){
    return bool === false;
}
console.log("12. Your input returned " + isFalse(false) + " as a result!");


























