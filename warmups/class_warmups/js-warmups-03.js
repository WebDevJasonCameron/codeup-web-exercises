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

// let firstName = ['CJ', 'Max', 'Claude', 'Meowmeow' ];
// let lastName = ['Cat', 'Feline', 'Kitten', 'Calico'];

// function createNames(a1, a2){
//     let fullNameArray = [];
//
//     for (let i = 0; i < a1.length; i++) {
//
//         let namedObj = {                                        //   <-- Remember that this needs to be inside!
//             fName: '',                                          // Otherwise, it will never 'be fresh' for pushing
//             lName: ''                                           // to the final array
//         }
//
//         namedObj.fName = a1[i];
//         namedObj.lName = a2[i];
//         fullNameArray.push(namedObj);
//     }
//     return fullNameArray;
// }
//
// console.log(createNames(firstName, lastName));


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


/**
 * 2022 02 24
 * Additional Challenges
 */
// Write a function that accepts two int and returns the remainder
// of dividing the larger value by the smaller value.
// Division by zero return NaN
// function largeToSmall(n1, n2){
//     if(n1 === 0 || n2 === 0) return NaN
//     if(n1 > n2) return n1 % n2;
//     return n2 % n1;
// }

// console.log(largeToSmall(15, 2));
// console.log(largeToSmall(2, 15));
// console.log(largeToSmall(0, 3));


// In a factory a printer prints labels for boxes.  For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// the colors used by the printer are recorded in a control string.  for example, a "good" control string would be aaabbbbhaijjm, meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbyyhwawiwjjjwm with letters not from a to m.

// you have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string.  Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from a to z.

// NOT ENOUGH TIME  !!!!!!!
// function printerError(x){
//     let output = 0;
//     for (let i = 0; i < x.length; i++) {
//         if(x[i] > 'm') {output++}
//     }
//     return '' + output + '/' + x.length
// }
// let response = 'aabbccccddmttxmdde'
// console.log(printerError(response));


/**
 * 2022 03 01
 * Additional Challenges
 */

// function isLockNessMonster(s){
//     if(typeof s === 'number') s = s.toFixed(2);
//     s = s.toString();
//     if(s.includes('three fifty') === true) return true;
//     if(s.includes('tree fiddy') === true) return true;
//     if(s.includes('3.50') === true) return true;
//     else return false;
// }
//
// let s1 = 'three fifty';
// let s2 = 'tree fiddy';
// let s3 = '3.50';
// let s4 = 'that will be three fifty';
// let s5 = 'that will be tree fiddy';
// let s6 = 'that will be 3.50';
// let s7 = 'dunno';
// let s8 = 3.50;
//
// console.log(isLockNessMonster(s1));
// console.log(isLockNessMonster(s2));
// console.log(isLockNessMonster(s3));
// console.log(isLockNessMonster(s4));
// console.log(isLockNessMonster(s5));
// console.log(isLockNessMonster(s6));
// console.log(isLockNessMonster(s7));
// console.log(isLockNessMonster(s8));

// Calc the amount of unlucky days
function unluckyDays(year){                                //   Function allows us to choose the year...
    let startMonth;                                             //   Var for the month we will start at

    if(year !== 2022) startMonth = 12 * (year - 2022);          //   Start month calc by subtracting from this year
    else startMonth = 1;                                        // multiply by 12.  If we are searching this year, we
                                                                // leave it to one
    let output = 0;                                             //   Var for our output

    for (let i = 0; i <12; i++) {                               //   For loop to count 12 months
        let d = new Date(new Date().getFullYear(), startMonth, 13);
                                                                //   Using built in JS .getFullYear() function and base
                                                                // our whole count on what month we are starting on.
                                                                // each time we loop, we search the 13th day of that
                                                                // month.
        d = d.toString();                                       //   This converts the previous response as a string
        if(d.includes('Fri') === true) output ++;  //   If we find 'Fri' in that string, we add it to
                                                                // the output count
        startMonth ++;                                          //   Move up to the next month (Jan to Feb, etc)

        console.log(d)                                          //   Logging d to see if this actually works!
    }
    return output + ' unlucky FRIDAY the 13ths';
}

console.log(unluckyDays(2030));



// let d = new Date();
//
// let date = d.getDate();
// let month = d.getMonth() + 1;
// let year = d.getFullYear();
//
// let dateStr = date + '/' + month + '/' + year;
//
// console.log(dateStr);


// Loop through year to identify the friday that also equals to the date 13


// After the year is completed, return the number of fridays that also has the number 13








