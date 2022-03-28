/**
 * 2022 03 15
 */

// Create a function, createFirstNamesArray, that takes in an array of user objects
// and returns an array of first name strings. Assume that each user object has a
// property called 'firstName'.
//
//     Example...
//
// let users = [
//     {
//         firstName: 'Bob',
//         lastName: 'Smith',
//         email: 'bob@email.com'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         email: 'sally@email.com'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         email: 'fred@email.com'
//     },
//     {
//         firstName: 'Cathy',
//         lastName: 'Smith',
//         email: 'cathy@email.com'
//     },
//     {
//         firstName: 'Joe',
//         lastName: 'Smith',
//         email: 'joe@email.com'
//     },
// ];
//
// // createFirstNamesArray(users); // returns... ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe']
//
// function createFirstNamesArray(a){
//     let output = [];
//     a.forEach(function (person){
//         output.push(person.firstName);
//     })
//     return output;
// }
//
// console.log(createFirstNamesArray(users));

/**
 * 2022 03 17
 */

// JQUERY APPROACH
// $('#change-color').click(function (){
//     $('#square').css('background-color', 'green');
// })

// VJS
// Action
// function changeColorAction(){
//    document.getElementById('square')
//        .style
//        .backgroundColor = 'green';
// }
// function resetPage(){
//    window.location.reload();
// }
//
// // Var
// let changeColorBtn = document.getElementById('change-color-btn');
// let changeColorResetBtn = document.getElementById('change-color-reset-btn');
//
// // Event Listeners
// changeColorBtn.addEventListener('click', changeColorAction);
// changeColorResetBtn.addEventListener('click', resetPage);

// JQUERY
// })

/**
 * 2022 03 21
 */
    // JQUERY
    // MINE
    // $('.square').hover( function () {
    //     $(  this ).addClass('yellow');
    // }, function (){
    //     $( this ).removeClass('yellow');
    // })
    //
    //
    // INSTRUCTORS
    // $('.square').on('click', function () {
    //     $(this).toggleClass('yellow');
    //     console.log('click')
    // })

    // VJS
    // const changingColorsSquares = document.querySelectorAll('#changingColors .square');
    // function toggleColor(e){
    //     console.log(e)
    //     e.target.style.backgroundColor = "" ? e.target.style.backgroundColor = 'yellow' : e.target.style.backgroundColor = '';
    // }
    // changingColorsSquares.forEach(square => square.addEventListener('click', toggleColor))

/**
 * 2022 03 28
 */

// Create a function, encodeStr, that takes in a string and returns the string of
// characters with the following substitutions:

// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’

// encodeStr(‘apple’) // returns ‘@pple’
// encodeStr(‘codeup’) // returns ‘codeup’
// encodeStr(‘SASS’) // returns ‘$@$$’
// encodeStr(‘bike’) // returns ‘b1ke’

function encodeStr(s){
    let output = s.toLowerCase();
    output = output.replace('a', '@')
        .replace('i', '1')
        .replace('s', '$');
    return output;
}

console.log(encodeStr('apple'));
console.log(encodeStr('codeup'));
console.log(encodeStr('SASS'));
console.log(encodeStr('bike'));







