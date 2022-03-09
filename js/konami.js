$(document).ready(function() {
    "use strict";

    // Array that will store UI (and be reset after failure)
    let codeInput = [];

    // Compares UI with array
    function arrayCheck(c){
        const cheatCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
        for (let i = 0; i <= codeInput.length; i++) {
            if(codeInput[i] !== cheatCode[i]) return false
        }
        return true
    }

    // CSS Vars
    let winningBG = {
        'background-color': 'green',
        'color': 'white',
        'border-radius': '5px',
        'text-shadow': '0 0 10px #fff69b'
    }
    let averageBG = {
        'background-color': 'white',
        'color': 'black',
        'border-radius': '5px'

    }
    let maxLife = {
        'width': '100%',
    }
    let someLife = {
        'width': '90%',
    }


    // Response to whether UI is correct (CALLED WHEN 'ENTER' PRESSED)
    function response(r){
        if(r === true){
            $('#response-banner').css( winningBG ).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            $('#response-text').css( winningBG ).html('Player One INVINCIBLE!<br>FIGHT!!!!!').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            $('#player1-life-bar').css( maxLife ).html('INVINCIBLE <i class="fa-solid fa-infinity"></i>' );
            $('#player2-life-bar').css( maxLife ).html('INVINCIBLE <i class="fa-solid fa-infinity"></i>');

            // Fade Outs
            setTimeout(function() {
                $('#response-text').fadeOut('slow');
            }, 4000); // <-- time in milliseconds

            setTimeout(function() {
                $('#response-banner').fadeOut('slow');
            }, 4500); // <-- time in milliseconds

            // Clear Array
            codeInput = [];
        } else {
            $('#response-text').css( averageBG ).text('READY FIGHT!');
            $('#life-bar').css( maxLife );
            $('#player1-life-bar').css( someLife );
            $('#player2-life-bar').css( someLife );

            // Fade out
            setTimeout(function() {
                $('#response-text').fadeOut('slow');
            }, 4000); // <-- time in milliseconds

            // Clear Array
            codeInput = [];
        }
    }

    // Handles UI   (USER'S ACTION)
    $(document).keyup(function(event){
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode === 13){
            response(arrayCheck(codeInput));
        } else {
            codeInput.push(event.keyCode);
        }
    });

    // Randomize Game
    // Get Random number
    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rndInt = randomIntFromInterval(1, 5)
    console.log(rndInt)
    let randomNum = rndInt;

    // Switch to set up Game Content
    switch (randomNum){
        case 1:
            $('#main-container>div').show(function (){
                this.id='k-game-01-img'
            });
            break;
        case 2:
            $('#main-container>div').show(function (){
                this.id='k-game-02-img'
            });
            break;
        case 3:
            $('#main-container>div').show(function (){
                this.id='k-game-03-img'
            });
            break;
        case 4:
            $('#main-container>div').show(function (){
                this.id='k-game-04-img'
            });
            break;
        case 5:
            $('#main-container>div').show(function (){
                this.id='k-game-05-img'
            });
            break;
    }
});




// THE CODE
// 38, 38, 40, 40 37, 39, 37, 39, 66, 65
