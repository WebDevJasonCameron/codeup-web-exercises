/* FOR LOOPS */
/* AND ICE CREAM */
/*
An ice cream seller can't go home until she sells all of her cones.
    - First write enough code that generates a random number between 50 and 100 representing the
        amount of cones to sell before you start your loop.
    - Inside the loop your code should generate another random number between 1 and 5, simulating the
        amount of cones being bought by her clients.
    - Use a do-while loop to log to the console the amount of cones sold to each person.
    - The below code shows how to get the random numbers for this exercise.

The output should be similar to the following:

5 cones sold...                                 //   if there are enough cones
Cannot sell you 6 cones I only have 3...        //   If there are not enough cones
Yay! I sold them all!                           //   If there are no more cones
 */

// Vars
let allCones = Math.floor(Math.random() * 50) + 50;

// Function Tools
function orderNumber(){                         //   I am cheating... This function will make the Do While cleaner
    return Math.floor(Math.random() * 5) + 1;
}

function ableToSell(whatsLeft, orderNum){
    if((whatsLeft - orderNum) > 0){
        return orderNum + " cones sold";
    } else if ((whatsLeft - orderNum) === 0){
        return "Yay! I sold them All!";
    } else {
        return "Cannot sell you " + orderNum +
            " cones, I only have " + whatsLeft + "...";
    }
}

// Function: Running through the numbers
function sellingIceCream(numOfCones){

    console.log(numOfCones);

    do {
        let oN = orderNumber();

        console.log(ableToSell(numOfCones, oN));
        numOfCones -= oN;

    } while (numOfCones > 0)                        //   I'm always getting past 0... I need to figure out how to
                                                    // stop this.  I think it could lead to future errors
    console.log(numOfCones)
}

// Run Op
sellingIceCream(allCones);
