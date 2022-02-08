/**
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

// 3.  Add li tags to each item
for (let i = 0; i < monsterTypeArray.length; i++) {
    monsterTypeArray[i] = '<li>' + monsterTypeArray[i] + '</li>'
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
 * Insert JS String into Page
 */
// 1.  Grab html class tag
let monsterType = document.getElementsByClassName('monster-type-list');

// 2.  Check with console log
console.log(monsterType);















