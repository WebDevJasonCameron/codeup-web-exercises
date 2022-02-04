var globalVar1 = "Var Global Var 1";
let globalVar2 = "Let Global Var 2"

function scopeExample(){
    console.log("1. " + globalVar1);
    globalVar1 = "changed 1";
    console.log("2. " + globalVar1);

    console.log("1. " + globalVar2);
    let globalVar2 = "changed 2";
    console.log("2. " + globalVar2);
}

scopeExample();