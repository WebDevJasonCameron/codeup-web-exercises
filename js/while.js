/* WHILE LOOP */
/*
1. Create a file named while.js in the js directory.
2. Create while loop that uses console.log() to create the output shown below.

2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
 */

let x = 1;
while (x <= 32768 ){
    x *= 2;
    console.log(x);
}