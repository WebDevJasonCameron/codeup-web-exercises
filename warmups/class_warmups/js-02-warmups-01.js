/**
 * 2022 03 29
 */
// Write a function, returnMostCommonVowel, that takes in a string and returns
// the most common vowel in the string.  Assume the characters in the string are
// all lowercase and only 'a' 'e' 'i' 'o' 'u' count as vowels. Return the most
// common vowel from the string.
//
// If the highest vowel count is shared between multiple vowels, return the first
// vowel alphabetically. (2 'a's and 2 'e's should 'a')
//
// If no vowels are in the string return false.
/**
function returnMostCommonVowel(s){
    let a = 0
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;

    for (let m = 0; m < s.length; m++) {
        if(s[m] === 'a') {
            a = a + 1;
        } else if(s[m] === 'e') {
            e++;
        } else if(s[m] === 'i') {
            i++;
        } else if(s[m] === 'o') {
            o++;
        } else if(s[m] === 'u') {
            u ++;
        }
    }

    if(a > e && a > i && a > o && a > u ) return "In the String, '" + s + ",' a had: " + a;
    else if ( e > i && e > o && e > u) return "In the String, '" + s + ",' e had: " + e;
    else if ( i > o && i > u) return "In the String, '" + s + ",' i had: " + i;
    else if ( o > u) return "In the String, '" + s + ",' o had: " + o;
    else if ( u > 0) return "In the String, '" + s + ",' u had: " + u;
    else return "In the String, '" + s + ",' No vowels were found: " + false  ;

}

console.log(returnMostCommonVowel("Hello my name is jason"));
console.log(returnMostCommonVowel("AAAAAAAaaaaaaagggghhhhhh!!!!!!"));
console.log(returnMostCommonVowel("There were sea shells by the sea shore"));
console.log(returnMostCommonVowel("nnnnnnnnn"));
*/

// INSTRUCTOR




/**
 * 2022 03 30
 */
//================================= WARM UP
//
// Create a function, returnAvgAdminSalary, that takes in an array of users and returns
// the average salary of all admins. Round to the nearest dollar.
//
// Example:

const users = [
  {
    name: 'Fred',
    isAdmin: true,
    salary: 20000
  },
  {
    name: 'Cathy',
    isAdmin: false,
    salary: 40000
  },
  {
    name: 'Sally',
    isAdmin: true,
    salary: 80000
  },
  {
    name: 'Kyle',
    isAdmin: true,
    salary: 50000
  },
  {
    name: 'Cynthia',
    isAdmin: false,
    salary: 100000
  }
];

// My Approach

function returnAvgAdminSalary(a){
    let output = 0;
    let length = 0;
    a.forEach(function(u){
        if(u.isAdmin === true) {
            output += u.salary;
            length ++;
        }
    })
    output = output / length;
    return output;
}
/**
// Instructor
function returnAvgAdminSalaryInstr(a){
    const admin = users.filter(u => u.isAdmin);
    return admin.reduce((accum, curr) => + accum + curr.salary, 0) / admin.length;
}

console.log(returnAvgAdminSalary(users), "returns 50000");
console.log(returnAvgAdminSalaryInstr(users), "Instructor");
 */