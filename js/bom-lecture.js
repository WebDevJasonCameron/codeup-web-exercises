// function hey(){
//     console.log('hey');
// }

// let sayHey = function (){
//     let count = 0;
//     function hey(){
//         console.log('hey ' + count);
//         count ++;
//     }
//     setInterval(hey, 1000)
// }
//
//
//
// sayHey();

// It won't work because there may be more than one  setInterval running on the
// page at one time you need a reference to a specific setInterval and you need
// to pass that reference to the clearInterval method


let count = 0;
let makeItStop = setInterval(hey, 1000);

function hey(){
    if(count<=10){
        console.log('hey ' + count);
        count++;
    }else {
        clearInterval(makeItStop)
    }
}


// Also be written like this:

// let count = 0;
// var makeItStop = setInterval(function (){
//     if(count <= 10){
//         console.log('hey ' + count);
//         count ++;
//     } else {clearInterval(makeItStop)}
// })








