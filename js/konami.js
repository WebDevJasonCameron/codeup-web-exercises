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


    // Response to whether UI is correct
    function response(r){
        if(r === true){
            $('#response-banner').css( winningBG ).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            $('#response-text').css( winningBG ).html('Player One INVINCIBLE!<br>FIGHT!!!!!').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            $('#player1-life-bar').css( maxLife );
            $('#player2-life-bar').css( maxLife );


            codeInput = [];
        } else {
            $('#response-text').css( averageBG ).text('READY FIGHT!');
            $('#life-bar').css( maxLife );
            $('#player1-life-bar').css( someLife );
            $('#player2-life-bar').css( someLife );

            codeInput = [];
        }
    }

    // Handles UI
    $(document).keyup(function(event){
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode === 13){
            response(arrayCheck(codeInput));
        } else {
            codeInput.push(event.keyCode);
        }
    });
});




// THE CODE
// 38, 38, 40, 40 37, 39, 37, 39, 66, 65
