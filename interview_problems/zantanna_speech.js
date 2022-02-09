function zatannaSpeech(zS){
    zS = zS.split(' ');
    let newZS;
    let zSArray = [];
    for (let i = 0; i <zS.length; i++) {
        newZS = zS[i].split('').reverse().join('');
        newZS = newZS.replace(',', '');
        newZS = newZS.toLowerCase();
        zSArray.push(newZS);
    }
    let fString = zSArray.join(" ");
    fString = fString.charAt(0).toUpperCase() + fString.slice(1, fString.length);
    return fString;

}

console.log(zatannaSpeech("Hello there World"));
console.log(zatannaSpeech('I am not saying you cannot be anything you want to be, but the whole superhero thing is much more than just wearing a cape and getting famous'));

let zsExample = document.getElementById('zs-example');
zsExample.innerHTML = zatannaSpeech('I am not saying you cannot be anything you want to be, but the whole superhero thing is much more than just wearing a cape and getting famous')