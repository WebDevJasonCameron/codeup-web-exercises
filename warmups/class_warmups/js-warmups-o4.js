// In this kata you will create a function that takes a list of
// non-negative integers and strings and returns a new list with
// the strings filtered out.

function filter_list(l){
    let output = [];
    for (let i = 0; i < l.length; i++) {
        if(typeof l[i] !== 'string' ) output.push(l[i]);
    }
    return output;
}

a1 = ['1', '2', 3, 4];
a2 = ['1', 2, 3, 4];
a3 = [1, 2, 3, 4];

console.log(filter_list(a1));
console.log(filter_list(a2));
console.log(filter_list(a3));