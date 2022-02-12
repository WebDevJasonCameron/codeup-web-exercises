// Recursive Solution
function fib(n){
    if(n<3) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(15));








// Non Recursion Version
// function fib(n) {
//     if(n < 3) return 1;
//
//     let prev = 1;
//     let curr = 1;
//     let next = 0
//
//     let str = '0, '
//
//     // i = s
//
//     for (let i = 2; i < n; i++) {
//         next = prev + curr;
//         prev = curr;
//         curr = next;
//
//         str = str + curr + ', '
//     }
//     return str + '' + next;
// }

