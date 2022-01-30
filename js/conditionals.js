"use strict";

/* ########################################################################## */

/**
 * 1. TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color){
//     if (color === "blue"){
//         return "The sky is blue";
//     } else if (color === "red"){
//         return "Roses are red";
//     } else if (color === "green"){
//         return "Most magic is green";
//     } else if (color === "yellow"){
//         return "The sun is yellow";
//     } else {
//         return "I do not know anything about " + color;
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * 2. TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * 3. TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(color){
    switch (color.toLowerCase()){
        case "blue":
            return "Blue is the color of the sky";
        case "red":
            return "Red is the color of blood";
        case "yellow":
            return "Yellow is the color of heat";
        case "orange":
            return "Orange is the color of a sweet fruit";
        default:
            return "I know nothing of the color " + color;
    }
}

/**
 * 4. TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let userColor = prompt("please provide a color for analyzing... ");
alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * 5. TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(num, currentTotal){
    switch (num){
        case 0:
            return currentTotal;
        case 1:
            return currentTotal - (currentTotal * 0.10);
        case 2:
            return currentTotal - (currentTotal * 0.25);
        case 3:
            return currentTotal - (currentTotal * 0.35);
        case 4:
            return currentTotal - (currentTotal * 0.50);
        default:
            return 0;
    }
}

// console.log(calculateTotal(1, 100));
// console.log(calculateTotal(2, 100));
// console.log(calculateTotal(3, 100));
// console.log(calculateTotal(4, 100));
// console.log(calculateTotal(5, 100));


/**
 * 6. TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);

let billTotal = prompt("What was the total of your bill?");
alert("Your final bill is: " + calculateTotal(luckyNumber, billTotal).toFixed(2));


/**
 * 7. TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// Small functions
function isEven(num){
    if(num % 2 == 0){
        return "Number " + num + " is even.";
    } else {
        return "Number " + num + " is odd.";
    }
}

function plusHundred(num){
    return "The number " + num + " is " + (parseInt(num) + 100) + " when you add a hundred to it.";
}

function negOrPositive(num){
    if(num >= 1){
        return "The number " + num + " is positive.";
    } else {
        return "The number " + num + " is negative.";
    }
}

// Actions called if chosen yes
function handleResponse(response){
    if(isNaN(response)){
        alert("You did not enter a number.")
    } else {
        alert(isEven(response));
        alert(plusHundred(response));
        alert(negOrPositive(response));
    }
}

let answer = confirm("Would you like to enter a number?")

if(answer === true){
    let response = prompt("What number would you like to analyze?");
    handleResponse(response);
} else {
    alert("You decided not to play.  Thant is ok.  We aren't sad about it.  ")
}