/* FOR LOOPS */

/*
2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
 */
console.log('-----------    Question 2');


function showMultiplicationTable(num){
    for (let i = 0; i < 10; i++) {
        console.log(num + " * " + i + " = " + (num * (i+1)));
    }
}

// showMultiplicationTable(7);             // <-Testing

/*
3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
 */
console.log('-----------    Question 3');

// Simply taken from StackOverflow
function randomIntFromInterval(min, max) {                              //    min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(20, 200)                           //   <-- This never worked for me

for (let i = 0; i < 10; i++) {
    let x = randomIntFromInterval(20, 200)
    if(x % 2 === 0){
        console.log((i+1) + ". The number " + x + " is even.")
    } else {
        console.log((i+1) + ". The number " + x + " is odd.")
    }
}

/*
4. Create a for loop that uses console.log to create the output shown below.
1
22
333
4444
55555
666666
7777777
88888888
999999999
 */
console.log('-----------    Question 4');

for (let i = 1; i < 10; i++) {          //   Standard For I loop
    let j = i;                          //   Need to set up these vars for the while loop.  If we use the i var from
    let rs = "";                        //   The For I loop, wee will find ourselves in a continuous loop.

    while (j > 0) {                     //   We use the j var to set up our counter
        rs += i + "";                   //   Each time the loop runs, we add variable i's data (as a string) to the rs
        j--;                            //   Each time the loop runs, j is reduced by one
    }
    console.log(rs);                    //   the log must be outside the while loop because we would have redundant
                                        // lines of rs (i.e. 4, 44, 444, 4444)
}

/*
4. Create a for loop that uses console.log to create the output shown below.
100
95
90
85
80
75
70
... (continues until) ...
5
 */
console.log('-----------    Question 5');

let n = 100;
while(n > 0){
    console.log(n);
    n -= 5;
}







