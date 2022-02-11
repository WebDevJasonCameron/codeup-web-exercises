/**
 * 2022 02 11
 * Remove B's
 */


// Write a function called removeBs that takes in an array of strings and return an array of strings with all b's removed from each string elements'

// Examples...
// removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]

let b = ['abc', 'ab', 'cat', 'Bay'];

function removeBs(a){
    let na = [];
    a.forEach(function (word){
        console.log(word);
        na.push(word.toLowerCase().replace('b', ''))
    })
    return na;
}


console.log(removeBs(b));