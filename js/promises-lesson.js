// function myGreeter(greeting, name, outputFunction){
//     const salutations = `${greeting}, ${name}!`;
//     outputFunction(salutations);
// }

// function displayInput(input) {
//     document.getElementById('output').innerHTML = input;
// }

// setTimeout(myGreeter, 2000, "Yo", "dude", displayInput);

// External resources
// function getInfo(outputFunction){
//     const request =$.get('data/orders.json', function (result){
//         const infoToDisplay = result.data;
//         outputFunction(infoToDisplay);
//     })
// }

// PROMISES
const ourFirstPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        if(Math.random() > 0.5) {
            resolve('I am resolved');
        } else {
            reject('I was rejected');
        }
    }, 1000)
})

ourFirstPromise.then(value => console.log(value)).catch(error => console.log(error));


console.log("hello?")














