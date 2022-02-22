/**
 * 2022 02 18
 * Additional Challenges
 */

// Create a function, analyzeArray, that takes in an array and returns an object with information about the passed array. The function should return an object with properties containing information about the array, including the lengthOfArray, containsAllStrings, and the combineResult of adding all elements together.
// analyzeArray([1, 2, 3]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: false,
//     combineResult: 6
// }
// analyzeArray([‘a’, ‘b’, ‘c’]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘abc’
// }
// analyzeArray([‘bob’, 100, null]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘bob123null’
// }


// function allStrings (arr){                                          //   1st Func to determine if index was a string.
//                                                                     // Yes, I tried forEach and was rejected in results.
//                                                                     // I don't know why... Any ideas????
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof  arr[i] !== 'string')                             //   If index shows that it isn't a string we break
//             return arr + '... is an array that does NOT contain ALL strings!';
//     }
//     return arr + '... is an array that CONTAINS ALL strings!';      //   ... otherwise, all are string
// }
//
// function allAdded(arr){                                             //   2nd Func, we add all the inputs into a string
//     let x = '';                                                     // concat.  Start by setting an output var (x)
//     arr.forEach(function (n){
//         x = x + n + '';                                             //   add each array index as a string... NOTE
//     })                                                              // the " + '' " auto converts input into a string!
//     return x;
// }
//
// function analyzeArray(arr){                                         //   3rd Func creates an OBJ with the desired
//     return {                                                        // characteristics.  Two pull from the outside
//         lengthOfArray: arr.length,                                  // functions.  I tried to figure out how to make
//         containsAllStrings: allStrings(arr),                        // the functions as methods (within the actual obj)
//         combineResult: allAdded(arr),
//     }
// }
//
// let a1 =['a', 'b', 'c'];                                            //   Set up arrays to test
// let a2 = ['bob', 100, null];
// let a3 = [1, 2, 3]
//
// console.log(analyzeArray(a1));                                      //   Testing the functions (Obj)
// console.log(analyzeArray(a2));
// console.log(analyzeArray(a3));

/**
 * 2022 02 22
 * Additional Challenges
 */
// Create a function called creatNames, that takes in an array of first ames and an array of last names.  The function should return an array of names objects with firstName and lastName properties with the input array values. Assume both input array are not empty, the same length and only contain string elements.

// HINT: A SOLUTION MAY INVOLVE USING A FOR LOOP TO ITERATE OVER THE LENGTH OF ONE ARRAY TO PUSH EACH NAME OBJ ONTO AN ARRAY OF NAME OBJ THAT WILL BE RETURNED FROM THE FUNCTION

let firstName = ['CJ', 'Max', 'Claude', 'Meowmeow' ];
let lastName = ['Cat', 'Feline', 'Kitten', 'Calico'];

function createNames(a1, a2){
    let fullNameArray = [];

    for (let i = 0; i < a1.length; i++) {

        let namedObj = {                                        //   <-- Remember that this needs to be inside!
            fName: '',                                          // Otherwise, it will never 'be fresh' for pushing
            lName: ''                                           // to the final array
        }

        namedObj.fName = a1[i];
        namedObj.lName = a2[i];
        fullNameArray.push(namedObj);
    }
    return fullNameArray;
}

console.log(createNames(firstName, lastName));


// function createNames (a1, a2) {
//     let output = [];
//     for (let i = 0; i < a1.length; i++) {
//         output.push({                                            //   <-- This is neat because he didn't even need
//             firstName: a1[i],                                    // to name the obj
//             lastName: a2[i]
//         });
//     }
//     return output;
// }
//
// console.log(createNames(firstName, lastName));




















