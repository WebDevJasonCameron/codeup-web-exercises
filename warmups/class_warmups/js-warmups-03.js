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


function allStrings (arr){                                          //   1st Func to determine if index was a string.
                                                                    // Yes, I tried forEach and was rejected in results.
                                                                    // I don't know why... Any ideas????
    for (let i = 0; i < arr.length; i++) {
        if(typeof  arr[i] !== 'string')                             //   If index shows that it isn't a string we break
            return arr + '... is an array that does NOT contain ALL strings!';
    }
    return arr + '... is an array that CONTAINS ALL strings!';      //   ... otherwise, all are string
}

function allAdded(arr){                                             //   2nd Func, we add all the inputs into a string
    let x = '';                                                     // concat.  Start by setting an output var (x)
    arr.forEach(function (n){
        x = x + n + '';                                             //   add each array index as a string... NOTE
    })                                                              // the " + '' " auto converts input into a string!
    return x;
}

function analyzeArray(arr){                                         //   3rd Func creates an OBJ with the desired
    return {                                                        // characteristics.  Two pull from the outside
        lengthOfArray: arr.length,                                  // functions.  I tried to figure out how to make
        containsAllStrings: allStrings(arr),                        // the functions as methods (within the actual obj)
        combineResult: allAdded(arr),
    }
}

let a1 =['a', 'b', 'c'];                                            //   Set up arrays to test
let a2 = ['bob', 100, null];
let a3 = [1, 2, 3]

console.log(analyzeArray(a1));                                      //   Testing the functions (Obj)
console.log(analyzeArray(a2));
console.log(analyzeArray(a3));

