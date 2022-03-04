// In this kata you will create a function that takes a list of
// non-negative integers and strings and returns a new list with
// the strings filtered out.

// function filter_list(l){
//     let output = [];
//     for (let i = 0; i < l.length; i++) {
//         if(typeof l[i] !== 'string' ) output.push(l[i]);
//     }
//     return output;
// }
//
// a1 = ['1', '2', 3, 4];
// a2 = ['1', 2, 3, 4];
// a3 = [1, 2, 3, 4];
//
// console.log(filter_list(a1));
// console.log(filter_list(a2));
// console.log(filter_list(a3));


/**
 * 2022 03 04
 */

// Create a function that accepts an obj with two properties and weight, and returns the weight

// parcelWeight ({
//     parcelNumber: 1,
//     weight: 20
// })

// let parcel = {
//     parcelNumber: 1,
//     weight: 20
// }
//
// function returnParcelWeight (p) {
//     return p.weight;
// }




// Create a function that accepts an array of obj with two properties, parcelNumber and weight, and returns the total weight of all parcels

// let multipleParcels = [
//     parcel1 = {
//         parcelNumber: 1,
//         weight: 20
//     },
//     parcel2 = {
//         parcelNumber: 1,
//         weight: 20
//     }
// ]
//
// function rParcelWeight (p1, p2) {
//     console.log(p1.weight)
//     // return p1.weight + p2.weight;
// }
//
// rParcelWeight(multipleParcels[0].weight, multipleParcels[1].weight,)

// document.getElementById('#the-answers').innerText = answer;

// CONTINUE DOM WARM UP
    // Vars
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let theAnswer = document.getElementById('the-answers');

    // Functions
function sayGoodMorning(){
    theAnswer.innerText = "Good Morning";
}
function sayGoodAfternoon(){
    theAnswer.innerText= "Good Afternoon";
}

    // Listeners
btn1.addEventListener('click', sayGoodMorning);
btn2.addEventListener('click', sayGoodAfternoon);








// Create a function that accepts an array of obj with two properties, parcelNumber and weight, and output the content to a web page in two columns with the total listed at the end








