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

/**
 * 2022 03 18
 */
// JQUERY
$('.square').hover(function (){
    console.log($(this).attr('data-color'));
    const $targetColor = $(this).attr('data-color');
    $(this).css('background-color', $targetColor);
}, function(){
    $(this).css('background-color', 'white');
})

// VSJ
document.querySelectorAll('.square').forEach(function(el){
    element.addEventListener('mouseCenter', function(event){
        // console.log(event.target);
        const targetColor = event.target.dataset.color;
        event.target.style.bacgroundColor = targetColor
    })
    element.addEventListener('mouseLeave', function(event){
        event.target.style.backgroundColor = 'white';
    })
})