$(document).ready(function() {

    $('#toggler').click(function () {
        $('dd').toggleClass('inv');
    })

    $('dt').click(function () {
        $( this ).toggleClass( "highlight" );
    })
    
});



