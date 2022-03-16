// 9.
function checkV(x){
    switch (x.toLowerCase()){
        case 'a': case 'e': case 'i': case 'o': case 'u':
            return true;
    }
}
function countVowels(s){
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if(checkV(s[i]) === true) count ++;
    }
    return count;
}

// console.log(countVowels('zyz'));





// 11.
function capitalizeName(s){
    s = s.split(' ');
    let fn = s[0].toString().charAt(0).toUpperCase() + s[0].toString().slice(1);
    let ln = s[1].toString().charAt(0).toUpperCase() + s[1].toString().slice(1);

    return fn + ' ' + ln;
}

console.log(capitalizeName('calvin cameron'));







