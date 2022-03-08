/**
 *  1. Testing .filter method
 *
 *  A prime number is a number that can
 *  only be divided by itself and 1 without
 *  remainders
 */


// const array = [-3, -2, -1, 0, 1, 2,         //   First the Array
//     3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
//     13];
//
//
// function isPrime(num) {                     //   Create function that checks each number
//                                             // to see if it is a prime number
//     for (let i = 2; num > i; i++) {         //   To do this, a num needs to be plugged into
//         if (num % i == 0) {                 // function.  A for loop divides the number from
//             return false;                   // two incrementally, until it is one less than
//         }                                   // the original num.  If it is divisible by any
//     }                                       // number, it is therefore NOT a prime
//     return num > 1;
// }
//
// console.log(array.filter(isPrime));         //   Expected: [2, 3, 5, 7, 11, 13]
//                                             //   The '.filter' allows us to take an array
//                                             // and increment through it, applying a function
//                                             // to each index


/**
 * Question 67 from 101 prep
 */
// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.
// function onlyOddNumbers (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             arr.splice(i, 1);
//         }
//     }
//     return arr;
// }
//
// onlyOddNumbers([1, 2, 3, 4, 5, 6])

// function onlyOddNumbers2(arr) {
//     let output = [];                            //   First, set up an array var to catch the odd num
//     arr.forEach(function (num) {                //   Run a forEach 'loop' with 'num' param
//         if (num % 2 === 1) {                    //   if 'num' has a remainder of one,
//             output.push(num)                    // we push to the output array var
//         };
//     });
//     return output;
// }
//
// let myArray = [1, 2, 3, 4, 5, 6]

// console.log(onlyOddNumbers2(myArray));

