$(document).ready(function() {

    $('#toggler').click(function () {
        $('dd').toggleClass('inv');
    })

    $('dt').click(function () {
        $( this ).toggleClass( 'highlight' );
    })

    $('#yellow-toggler').click(function (){
        $('li').last().toggleClass('highlight')
    })

    $('h3').click(function (){
        $( this ).parents('li').nextAll().removeClass('text-muted');
        $( this ).parents('li').nextAll().css('background-color', 'yellow');
        $( this ).parents('li').nextAll().css('font-weight', 'bold');

    })


});



