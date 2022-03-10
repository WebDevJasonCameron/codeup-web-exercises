$(document).ready(function() {

    $('#toggler').click(function () {
        $('dd').toggleClass('invisible');
    })

    $('dt').click(function () {
        $(this).toggleClass('highlight');
        $(this).next('dd').toggleClass('highlight');
    })

    $('#embolden').click(function () {
        $('li').each(function (i, e) {
            $(e).children().last().children().last().toggleClass('highlight');
        });
    })

    $('h3').click(function () {
        $(this).next().children().first().toggleClass('make-bold');
        console.log('hit')
    })

    //  BROKEN ... FIX  (SO CLOSE THOUGH)
    $('li').click(function () {
        $(this).parent().children().first().css('color', 'blue')
    })
});






