(function(){
    "use strict";

    /**
     * 1. TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ["John", "Jacob", "Jingle-Himer", "Smith"];

    /**
     * 2. TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);              //   Not sure why this shows "4" when we start the count at index "0"

    /**
     * 3. TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0], names[1], names[2], names[3])

    /**
     * 4. TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    /**
     * 5. TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (name){
        console.log(name);
    })

    /**
     * 6. TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function firstFun(theArray){
        return theArray[0];
    }

    function secondFun(theArray){
        return theArray[1];
    }

    function thirdFun(theArray){
        return theArray[theArray.length - 1];
    }

    // Testing
    let myArray = [1, 2, 3, 4, 5];

    console.log(firstFun(myArray));
    console.log(secondFun(myArray));
    console.log(thirdFun(myArray));

})();