"use strict";

// 1. Create a file named map-filter-reduce.js in your js directory and
//    copy the user's data below into it.
//    <--DONE

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2. Use .filter to create an array of user objects where each user object
//    has at least 3 languages in the languages array.
console.log('Problem 02.........................');
const threeLang = users.filter(({languages}) => languages.length >= 3);

console.log(threeLang);


// 3. Use .map to create an array of strings where each element is a user's
//    email address
console.log('Problem 03.........................');
const userEmailList = users.map(({email}) => email);

console.log(userEmailList);


// 4. Use .reduce to get the total years of experience from the list of users.
//    Once you get the total of years you can use the result to calculate the
//    average.
console.log('Problem 04.........................');
const totalYearsExp = users.reduce((pv, cv,) => pv + cv.yearsOfExperience, 0);
console.log('Total years user exp: ' + totalYearsExp);
const totalAverageExp = users.reduce((pv, cv, i, a) =>
    pv + cv.yearsOfExperience / a.length - 1, 0);

console.log('Total average exp: ' + totalAverageExp);



// 5. Use .reduce to get the longest email from the list of users.
console.log('Problem 05.........................');
const longestEmail = users.reduce((pv, cv) => {
    if(cv.email.length > pv.length)
        pv = cv.email;
    return pv
}, '');

console.log('Longest email is: ' + longestEmail);


// 6. Use .reduce to get the list of user's names in a single string. Example:
//    Your instructors are: ryan, luis, zach, fernando, justin.
console.log('Problem 06.........................');
const userNamesInString = users.reduce((pv, cv, i, a) =>
    pv + cv.name + (i < (a.length - 1) ? ', ' : '.')                                    //   <-- TRICKY!!!
, '');

console.log('User names in a string: ' + userNamesInString);








