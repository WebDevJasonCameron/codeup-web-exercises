/**
 * 2022 02 11
 * Remove B's
 */


// Write a function called removeBs that takes in an array of strings and return an array of strings with all b's removed from each string elements'

// Examples...
// removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]

// let b = ['abc', 'ab', 'cat', 'Bay'];
//
// function removeBs(a){
//     let na = [];
//     a.forEach(function (word){
//         console.log(word);
//         na.push(word.toLowerCase().replace('b', ''))
//     })
//     return na;
// }
//
//
// console.log(removeBs(b));


/**
 * 2022 02 14
 * email
 */
/*
Write a function, createUserMsg, that takes in a user object like the following...
{
    username: ‘jbomb’,
    email: ‘john@email.com’,
    isAdmin: true
}
...and returns a string output that displays in the console like this...
‘User jbomb is an admin and can be reached at john@email.com’
If jbomb were not an admin, the message should display...
‘User jbomb is not an admin and can be reached at john@email.com’
*/

// let user = {
//
//     uName: 'Calvin',
//     uEmail: 'Calvin@hobbes.com',
//     uAdmin: false,
//
//     createUserMsg: function (){
//         if(!this.uAdmin)return 'User ' + this.uName + ' is not an admin and can be reached at ' + this.uEmail;
//         return 'User ' + this.uName + ' is an admin and can be reached at ' + this.uEmail;
//     }
// }
//
//
//
// console.log(user.createUserMsg());
/**
 * 2022 02 16
 * email
 */
// You are given the length and width of a 40sided polygon.  The polygon can either be a rectangle square or a square.  If it is a square, return its area.  if it is a rectangle, return its parameter
// function squareOrRect(l, w){
//     if(isNaN((parseInt(l))) || isNaN(parseInt(w))) return false;
//     if(l === w) return l * w;
//     return (l*2) + (w*2);
// }
//
// console.log('the square\'s area is ' + squareOrRect(4, 4));
// console.log('the rectangle\'s parameter is ' +squareOrRect(6, 4));
// console.log(squareOrRect(1, "l"));
// console.log(squareOrRect(1, "true"));

/**
 * 2022 02 17
 * email
 */
// Create a functions that take 2 integers in form of a string as an input, and outputs the sum (also as a string)
// Part 1
function sumTheStrings(n1, n2) {                                    //   <- Come Back
    if(n1 === '') n1 = '0';
    if(n1 === '') n2 = '0';

    if(typeof n1 !== 'string' || typeof n2 !== 'string' ||
        isNaN(parseInt(n1)) || isNaN(parseInt(n1))) return false;
    return (parseInt(n1) + parseInt(n2)) + '' ;
}

console.log((typeof sumTheStrings('1', '2')) + ' of: ' + sumTheStrings('1', '2'));










