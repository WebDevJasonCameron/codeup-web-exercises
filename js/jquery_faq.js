$(document).ready(function() {

    $('#toggler').click(function () {
        $('dd').toggleClass('invisible');
    })

    $('dt').click(function () {
        $(this).toggleClass('highlight');
        $(this).next('dd').toggleClass('highlight');
    })

    // 3. Create a button that, when clicked, makes the last li in each
    //    ul have a yellow background.

    $('#embolden').click(function () {
        $('li').each(function (i, e) {
            $(e).children().last().children().last().toggleClass('highlight');
        });
    })

    // 4. When any h3 is clicked, the lis underneath it should be bolded.
    //    Use font-weight: bold to achieve this.

    $('h3').click(function () {
        $(this)
            .next()
            .first()
            .toggleClass('make-bold');
    })

    // 5. When any list item is clicked, first li of the parent ul should
    // have a font color of blue.
    //  BROKEN ... FIX  (SO CLOSE THOUGH)
    $('li').click(function () {
        $(this).parent().children().first().css('color', 'blue');
    })


    // Create 3 divs that each look like a picture frame. Each one should
    // have a unique background image and a button underneath that swaps
    // the image from the frame. Use the traversing functions of jQuery
    // to accomplish this.
    //
    // The rules are the following:
    //
    // The left frame swaps to the right and takes the image from the frame in the center.
    // The center frame swaps randomly to either the left or right.
    // The right frame swaps to the left and takes the image from the frame in the center.











});






