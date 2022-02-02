"use strict";


console.log("-----------------question 01-----------------------");
console.log("-----------------sayHello--------------------------");
console.log(" ")

/**
 * 1. TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name){
    return "Hello, " + name + "!";
}
sayHello("CodeUp")

console.log("-----------------question 02-----------------------");
console.log("-----------------sayHello--------------------------");
console.log(" ")

/**
 * 2. TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("CodeUp");

console.log(helloMessage);

console.log("-----------------question 03-----------------------");
console.log("-----------------myName----------------------------");
console.log(" ")

/**
 * 3. TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

let myName = "Jason";
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);


console.log("-----------------question 04-----------------------");
console.log("-----------------isTwo-----------------------");
console.log(" ")

/**
 * 4. TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(num) {
    if(num === 2) {
        return true;
    } else {
        return false;
    }
}

console.log(isTwo(random));


console.log("-----------------question 05-----------------------");
console.log("-----------------calculateTip----------------------");
console.log(" ")

/**
 * 5. TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercent, total){

    return total * tipPercent;
}

// TESTING FUNCTION
// console.log(calculateTip(0.20, 20));
// console.log(calculateTip(0.25, 25.50));
// console.log(calculateTip(0.15,33.42));

console.log("-----------------question 06-----------------------");
console.log("-----------------prompts---------------------------");
console.log(" ")

/**
 * 6. TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

alert("Lets calculate the total of your tip.");
var tp = prompt("what is the percentage should the tip be based on?")
var t = prompt("What was the total of your meal?")

var tt = calculateTip(tp, t);
tt = tt.toFixed(2);
alert("The total tip should be: " + tt);

console.log("-----------------question 07-----------------------");
console.log("-----------------applyDiscount---------------------");
console.log(" ");

/**
 * 7. TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(originalPrice, discountPercent){
    return originalPrice - (originalPrice * discountPercent);
}

alert("Now lets determine the cost of an item after a discount is applied...")
var ogPrice = prompt("What was the original price?");
var disPercent = prompt("What is the percentage of the discount?");
var fp = applyDiscount(ogPrice, disPercent);
fp = fp.toFixed(2);
alert("Your final price after the discount is deducted is: " + fp);



