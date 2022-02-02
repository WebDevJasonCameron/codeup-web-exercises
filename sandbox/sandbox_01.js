/* SANDBOX 01  */
"use strict";

function greet() {
    console.log("Hey there clicker");
}

function getList() {
    let wrongColors = ["#29B6F6", "#000", "#FF5733", "#B2B2B2"]
    let myList = document.getElementsByClassName('list');
    for (let i = 0; i < myList.length; i++) {
        myList[i].style.color = wrongColors[i];
    }
}

getList();

// Grab info from username box
function getUsername(){
    let theName = document.getElementById('username').value;
    return theName;
}

// create button
let submit = document.getElementById('submitBtn');

// add click action
submit.addEventListener("click", aFunction);

// produce results
function aFunction() {
    document.getElementById('results').innerHTML = getUsername();
}




getUsername();

