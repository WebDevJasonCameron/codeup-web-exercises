/**
 * 2022 03 15
 */

// Create a function, createFirstNamesArray, that takes in an array of user objects
// and returns an array of first name strings. Assume that each user object has a
// property called 'firstName'.
//
//     Example...

let users = [
    {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob@email.com'
    },
    {
        firstName: 'Sally',
        lastName: 'Smith',
        email: 'sally@email.com'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith',
        email: 'fred@email.com'
    },
    {
        firstName: 'Cathy',
        lastName: 'Smith',
        email: 'cathy@email.com'
    },
    {
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'joe@email.com'
    },
];

// createFirstNamesArray(users); // returns... ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe']

function createFirstNamesArray(a){
    let output = [];
    a.forEach(function (person){
        output.push(person.firstName);
    })
    return output;
}

console.log(createFirstNamesArray(users));