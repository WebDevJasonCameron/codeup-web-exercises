/**
 *  2022 03 08
 */

// Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:

// {
//     operation: 'subtract' (or 'multiply' or 'add'),
//     integer: 7 (or any positive or negative integer)
// }
//
// Example 1...


// function calcFun(op, n1, n2){                   //   Build a tool to be called to calculate each set of nums
//         switch (op){
//             case 'add':
//                 return n1 + n2 ;
//             case 'subtract':
//                 return n2 - n1;
//             case 'multiply':
//                 return n1 * n2;
//             case 'divide':
//                 return n1 / n2;
//         }
// }
//
// function computeOperations(opArray, num){               //   Main Function
//     let output = num;
//
//     opArray.forEach(function (op){                      //   Loop through the array
//         output = calcFun(op.operation, op.integer, output);
//         // console.log(output)                          //   Call calcFun, plugging the obj op and int to be calc on
//     })                                                  // on the current output int
//     return output;
// }
//
// let operations1 = [
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     }
// ]
// let operations2 = [
//
//     {
//         operation: 'add',
//         integer: 7
//     },
//     {
//         operation: 'add',
//         integer: 3
//     },
//     {
//         operation: 'multiply',
//         integer: 3
//     },
// ]
// let operations3 = [
//
//     {
//         operation: 'subtract',
//         integer: 5
//     },
//     {
//         operation: 'multiply',
//         integer: -2
//     },
//     {
//         operation: 'add',
//         integer: 10
//     },
// ]

// computeOperations(operations1, 10) // returns 20
// computeOperations(operations2, 10) // returns 60
// computeOperations(operations3, 10) // returns 0
// console.log(computeOperations(operations1, 10));
// console.log(computeOperations(operations2, 10));
// console.log(computeOperations(operations3, 10));        // 5 - 10 = -5 * -2 = -10 + 10 = 0


// function computeOperations(opArray, num){               //   Main Function
//     let output = num;
//
//     for (let i = 0; i < opArray.length; i++) {
//         if (opArray[i].operation === 'add') {
//             output = opArray[i].integer + output;
//         } else if (opArray[i].operation === 'subtract') {
//             output = output - opArray[i].integer
//         } else if (opArray[i].operation === 'multiply') {
//             output = opArray[i].integer * output;
//         } else {
//             output += opArray[i].integer / output;
//         }
//     }
//         return output;
// }
//
//     console.log(computeOperations(operations1, 10));
//     console.log(computeOperations(operations2, 10));
//     console.log(computeOperations(operations3, 10));

/**
 *  2022 03 10
 */

// ================================= WARM UP

// Create a function, addTwos, that takes in a array of integers and returns
// the sum of all 2s in the array. If no 2s are in the array, return 0.
//
// Examples:
//
// let nums1 = [1, 2, 3, 4, 5];
// let nums2 = [2, 2, 3, 4, 5];
// let nums3 = [10, 0, -5, 4, 5];
// let nums4 = [2, 2, -5, 2, 2];
// let nums5 = [2, 2, 2, 2, 2];
//
// function addTwos(a){
//     let output = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === 2 || a[i] === -2) {
//             output = output + a[i];
//         }
//     }
//     return output;
// }
//
// console.log(addTwos(nums1)); // returns 2
// console.log(addTwos(nums1)); // returns 4
// console.log(addTwos(nums1)); // returns 0
// console.log(addTwos(nums1)); // returns 8
// console.log(addTwos(nums1)); // returns 10

/**
 *  2022 03 11
 */
// Write a function, returnStringObject, that takes in a string and returns
// an object with information about the string. The object should have properties
// for stringValue and stringArray.
//
// Examples...
//
// returnStringObject('hello') // returns...
//
// {
//   stringValue: 'hello',
//   stringArray: ['h', 'e', 'l', 'l', 'o']
// }
//
// returnStringObject('codeup') // returns...
//
// {
//   stringValue: 'codeup',
//   stringArray: ['c', 'o', 'd', 'e', 'u', 'p']
// }

// function returnsStringObj(s){
//     return {
//         stringValue: s,
//         stringArray: s.split('')
//     }
// }
//
// console.log(returnsStringObj('hello'));
// console.log(returnsStringObj('codeup'));