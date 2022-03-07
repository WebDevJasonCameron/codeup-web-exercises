var band = new Object();

band['genre'] = "Metal";

console.log(band.genre);



band.shred = function() {
    console.log('RAAAAAAAAAA!!!!');
}

console.log(
    band.shred()
);


console.log(!!true)