// CONDITIONALS MINI-EXERCISES

// 1. Create conditional logic to represent the following scenario...
// If the car is locked, alert 'will open', otherwise, alert 'will not open
let carLocked = true;
let accessible = (carLocked) ? alert('will not open') : alert("will open");     //   <- pay attention to how it is
                                                                                // expected to be returned!

// 2. Write a function that takes in a string and returns a message based on the string length:

// if the string is no characters, return "Empty string"
// if the string is one character long, return "One character long"
// if the string is two characters long, return "Two characters long"
// Otherwise, return, "That is a long string!"
let string0 = "";
let string1 = "1";
let string2 = "12";
let string3 = "123";

function strCount(theString){
    if(theString.length === 0) return "Empty string";               //  <- Note, 0 is dif from "" when you compare
    else if (theString.length === 1) return "One character long";
    else if (theString.length < 2) return "Two Characters long";
    else return "That is a long string!";
}

console.log("The first string: \"" + string0 + "\" shows... \"" + strCount(string0) + "\"");
console.log("The first string: \"" + string1 + "\" shows... \"" + strCount(string1) + "\"");
console.log("The first string: \"" + string2 + "\" shows... \"" + strCount(string2) + "\"");
console.log("The first string: \"" + string3 + "\" shows... \"" + strCount(string3) + "\"");


// 3. Refactor the Following Code into a Ternary Operator:

/*
    var message;
    var num = 5;
    if (num < 10) {
        message = 'Num less than 10';
    } else {
        message = 'Num more than 10';
    }
*/
let num = 5;
let message = (num < 10) ? "Num Less than 10" : "Num more than 10";
console.log("The number variable, " + num + ", is " + message);