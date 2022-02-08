/* BREAK AND CONTINUE */
/*
1. Create a file named for_loops.js inside the js directory and link it to your loops.html file.
2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting
    the user if they enter invalid input.
3. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number
    the user entered.
 */

// Global Vars
let userResponse;

// Check Functions
function isOdd(num){
    if(num % 2 === 1) return true;
}

function responseCheck(response){
    if(response > 1 && response < 50 && response !== isNaN(response) && isOdd(response)){
        return true;
    } else {
        return false;
    }
}

// Function: List Odd numbers (except the one selected by the user)
function listOdd(selectedOdd){
    for (let i = 0; i < 50; i++) {
        if(selectedOdd == i){                       //   Note, this is a double equal op.  It is "true-ish"
            continue;                               // Triple equal will not work
        } else  {
            console.log(i);
        }
    }
}

// Function: Get valid response from user
function getValidResponse(){

    do {
        userResponse = prompt("Please provide an odd number between 1 and 50:  ");
        if (responseCheck(userResponse)) break;
    } while (true);

    listOdd(userResponse);
}

// Run Operations
getValidResponse();

