"use strict";

// alert("hello world");

let currentSpeed = parseInt(prompt("How fast are you driving?"));
let plannedSpeedIncrease = parseInt(prompt("HOw man more mph do you want to go"));

let newSpeed = currentSpeed + plannedSpeedIncrease;
console.log("your current speed is " + newSpeed);
console.log("You planned speed is " + newSpeed);

let distanceLeft   = parseInt(prompt("How many miles are you from your destination"));

let timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
let timePlannedSpeed = (distanceLeft/newSpeed) * 60;
let timeGoing = (timeAtCurrentSpeed - timePlannedSpeed);
console.log("If you drive at " + newSpeed + " mph, you will arrive " + timeGoing + " minutes sooner");
