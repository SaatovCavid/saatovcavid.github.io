$(document).ready(function(){
    $('button').click(function(){
        $('.header-content').fadeOut('slow', function(){
            $('.header-content').fadeIn(3000);
        });
    })
})
