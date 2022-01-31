
// 1.
// console.log("Hello from external JavaScrip");

// alert("Welcome to my Website");

// 2.A
// var answer = prompt("what is your favorite color");

// 2.B
// if (answer === "green") {
//     alert("Great, green is my favorite color too!")
// }

// Redoing 2.B cause this is really neat!
// alert("Great, " + answer + " is my favorite color too!");

// 3.A
// var mermaid = Number(prompt("how many days are you renting Little Mermaid?"));
// var brotherBear = Number(prompt("how many days are you renting Brother Bear"));
// var hercules = Number(prompt("how many days are you renting Hercules"));
// var costPerDay = 3;
// var finalCost = (mermaid * costPerDay) + (brotherBear * costPerDay) + (hercules * costPerDay);
// alert("The total cost of your movies is $" + finalCost);


// 3.B
// var googlePay = 400
// var amazonPay = 380
// var facebookPay = 350;
//
// var fHours = Number(prompt("Hom many hours did you work for Google?"));
// var gHours = Number(prompt("Hom many hours did you work for Amazon?"));
// var aHours = Number(prompt("Hom many hours did you work for Facebook?"));
//
// var totalPay = (googlePay * gHours) + (amazonPay * aHours) + (facebookPay * fHours)
// alert("The total amount you will be paid is $" +totalPay);

// 3.C
// var theClassIsNotFull = confirm("Confirm there is room in the class?");
// var ThereIsntAConflict = confirm("Confirm, no conflict in schedule?");
//
// var theStudentCanBeEnrolled = theClassIsNotFull && ThereIsntAConflict;
//
// alert("The fact that the student can be enrolled is " + theStudentCanBeEnrolled);


// 3.D
// var originalPrice = Number(prompt("What is the original price?"));
// var discountPrice = Number(prompt("What is the discount price?"));
// var numProduct = Number(prompt("How many products?"));
// var offerExpired = confirm("Is the discount expired?");
// var premMember = confirm("Does the customer have a premium account");
// var finalPrice;
//
// if(premMember === true) {
//     finalPrice = numProduct * discountPrice;
// } else if(numProduct > 2 && offerExpired !== true) {
//     finalPrice = numProduct * discountPrice;
// } else {
//     finalPrice = numProduct * originalPrice;
// }
// alert("The final price of all your stuff is $" + finalPrice);