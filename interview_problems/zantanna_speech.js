/**
 * See HTML on Purpose
 * @param zS
 * @returns {string}
 */

function zatannaSpeech(zS){
    zS = zS.split(' ');
    let newZS;                                                  //   Set up vars to manage changes to the array & string
    let zSArray = [];
    for (let i = 0; i <zS.length; i++) {
        newZS = zS[i].split('').reverse().join('');             //   Splits word into letters in this index, reverses
                                                                // letters and then joins letters back into a 'word'
        newZS = newZS.replace(',', '');  //   Takes out any commas in the index (if there is a
                                                                // comma)
        newZS = newZS.replace('.', '');
        newZS = newZS.replace('!', '');
        newZS = newZS.replace('?', '');


        newZS = newZS.toLowerCase();                            //   Removes all upper case letters
        zSArray.push(newZS);                                    //   MUST push new 'word' into a new array
    }
    let fString = zSArray.join(" ");                            //   Combines all indexes into a single string with a
                                                                // space between each 'word'
    fString = fString.charAt(0).toUpperCase()                   //   'Forces' the first char in the string to be
        + fString.slice(1, fString.length);                     // uppercase.  Because the 'charAt()' doesn't actually
                                                                // change the original string, I needed to add the
                                                                // changed upper case string to the rest of the
                                                                // original string
    return '"' + fString + '"';                                 //   Added quotation marks to show that this is a
                                                                // quote in the browser
}

console.log(zatannaSpeech('I am not saying you cannot be ' +            //   Checking in the console
    'anything you want to be, but the whole superhero thing is ' +
    'much more than just wearing a cape and getting famous'));

/**
 * Add Function to the HTML Doc
 * @type {HTMLElement}
 */

let zsExample = document.getElementById('zs-example');
zsExample.innerHTML = zatannaSpeech('I am not saying you cannot ' +
    'be anything you want to be, but the whole superhero thing is ' +
    'much more than just wearing a cape and getting famous');

/**
 * Creating the Form Applications
 */
// VARS
let zsTryIt = document.getElementById('zs-tryIt');                  //   <-- Text input
let zsSubmit = document.getElementById('zs-submit');                //   <-- Submit input (not button)
let zsUserString = document.getElementById('zs-user-string');       //   <-- Blockquote tag
let zsUserOriginalString = document.getElementById('zs-user-original-string')

// FUN
function grabAndTranslate(){
    let x = zsTryIt.value;                                               //   <-- Place input text in var
    zsUserString.innerHTML = zatannaSpeech(x);                               //   <-- Send translated input to browser
    zsUserOriginalString.innerHTML = x;
    console.log(zsUserString.innerHTML = zatannaSpeech(x));                  //   <-- Looking to see what is going on
}

// EVENT LISTENER
zsSubmit.addEventListener('click', grabAndTranslate);

// PREPPED STATEMENT
zsUserString.innerHTML = '"Your Translated Text Here..."';















