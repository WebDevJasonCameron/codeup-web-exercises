/**
 * ---------------------------------------------------------> 01-Step
 * Array and Tags
 * @type {string[]}
 */

// 1.  Create array of different types of D&D monsters
let monsterTypeArray = ['Aberration', 'Beast',
    'Celestial', 'Construct', 'Dragon', 'Elemental',
    'Fey', 'Fiend', 'Giant', 'Humanoid', 'Monstrosity',
    'Ooze', 'Plant', 'Undead' ]

// 2.  Console log each
// for (let i = 0; i < monsterTypeArray.length; i++) {
//     console.log(monsterTypeArray[i]);
// }

// 3.  Add li tags to each item                                     <-- Note: adding a class inside the li tag!
for (let i = 0; i < monsterTypeArray.length; i++) {
    monsterTypeArray[i] = '<li class="type-list">' + monsterTypeArray[i] + '</li>'
}

//  4.  Console log each
// for (let i = 0; i < monsterTypeArray.length; i++) {
//     console.log(monsterTypeArray[i]);
// }

// 5.  Convert array into string with ul tags at the beginning and end
let monsterTypeString = '<ul>' + monsterTypeArray.join('') + '</ul>'

// 6.  Console log Monster Type string
// console.log(monsterTypeString);

/**
 * ---------------------------------------------------------> 02-Step
 * Insert JS String into Page
 */
// 1.  Grab html class tag
let monsterTypeID = document.getElementById('monster-type-list');

// 2.  Check with console log
// console.log(monsterType);

// 3.  Set Monster Type String into the HTML of the Tag
monsterTypeID.innerHTML = monsterTypeString;

/**
 * ---------------------------------------------------------> 02-Step
 * Hide items if they meet criteria
 */
// 1.  Create an array based on class "type-list"                   <-- Necessary because we will need to
//                                                                      manipulate the style with this list
let monsterTypeHTMLArray = document.getElementsByClassName('type-list');


// 2.  Create a function that searches each item in Monster List for a criteria
function searchMonsterTypeHTMLFunction(criteria) {
    for (let i = 0; i < monsterTypeHTMLArray.length; i++) {
        console.log(monsterTypeHTMLArray[i].textContent);
    }
}
searchMonsterTypeHTMLFunction('C');

// 2.  Comment out previous, and recreate function with all items given 'hide' CSS class


for (let i = 0; i < monsterTypeHTMLArray.length; i++) {
    if (monsterTypeHTMLArray[i].includes(criteria)) console.log(monsterTypeHTMLArray[i]);
}






