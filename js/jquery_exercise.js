"use strict";

$(document).ready(function() {

    // INSERT JAVASCRIPT CODE SAMPLE HERE
    // $("#content").append("<p>The page just loaded</p>")


    // ID Selectors ------------------------------------------------------------
    //
    // 1. Create content in your HTML file using at least the following
    //    elements: h1, p, ul, li, div.
    //



    // 2. Add several attributes to your elements; you will need both
    //    id and class attributes.
    //

    // $('li').css('background-color', 'red');

    // 3. Use jQuery to select an element by the id. Alert the contents
    //    of the element.
    //

    // $('#green').css('background-color', 'green');

    // 4. Update the jQuery code to select and alert a different id.
    //

    // alert('How is the coolest Avenger?')
    // let theManAlert = $('#red').html();
    // alert(theManAlert)


    // 5. Use the same id on 2 elements. How does this change the jQuery
    //    selection?
    //

    // It only works on the first selection

    // 6. Remove the duplicate id. Each id should be unique on that page.

    // Done


    // Class Selectors ------------------------------------------------------------
    //
    // 1. Remove your custom jQuery code from previous exercises.
    //

    // Done

    // 2. Update your code so that at least 3 different elements have the
    //    same class named codeup.
    //

    // Done

    // 4. Using jQuery, create a border around all elements with the class
    //     codeup that is 1 pixel wide and red.
    //

    // $('.codeup').css('border','1px solid red');


    // 5. Remove the class from one of the elements. Refresh and test that
    //    the border has been removed.
    //

    // $('.codeup:first").removeClass(class);



    // 6. Give another element an id of codeup. Does this element get a
    //    border now?

    // No



    // Element Selectors ------------------------------------------------------------
    //
    // 1. Remove your custom jQuery code from previous exercises.

    // Done

    // 2. Using jQuery, set the font-size of all li elements to 20px.
    //

    // $('li').css('font-size', '20px');

    // 3. Craft selectors that highlight all the h1, p, and li elements.
    //

    // $('h1').css('background-color', 'blue');
    // $('p').css('background-color', 'blue');
    // $('li').css('background-color', 'blue');


    // 4. Create a jQuery statement to alert the contents of your h1
    //    element(s).

    // alert($('h1').html());

    // Multiple Selectors
    //
    // 1. Combine your selectors that highlight all the h1, p, and li
    //    elements.

    // $('h1, p, li').css('background-color', 'blue');


    // MOUSE OVER EVENTS =======================================================
    //
    // 1. Remove your custom jQuery code from previous exercises.
    //

    // Done

    // 2. Add jQuery code that will change the background color of a h1
    //    element when clicked.

    $('h1').click(() => {
        $('body').css('background-color', 'pink')
    })

    // 3. Make all paragraphs have a font size of 18px when they are
    //   double-clicked.
    //

    $('p').click(() => {
        $('p').css('font-size', '18px')
    })

    // 4. Set all li text color to red when the mouse is hovering; reset
    //    to black when it is not.

    $('li').hover(() => {
        $('li').css('color', 'red')
    }, () => {
        $('li').css('color', 'black')
    })

});