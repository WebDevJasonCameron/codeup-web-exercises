
// VARS
let square = document.querySelector('.square');
let askForColor = document.getElementById('ask-for-color');
let changeBtn = document.getElementById('change-btn');
let talkingSquare = document.getElementById('talking-square')


// FUNCTIONS
function squareTalksAndChanges(){
    talkingSquare.innerText = "Now I am a lovely " + askForColor.value + " square!!!";
    square.style.backgroundColor = askForColor.value;
}


// EVENT LISTENERS
changeBtn.addEventListener('click', squareTalksAndChanges);
window.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        squareTalksAndChanges()
    }
});


