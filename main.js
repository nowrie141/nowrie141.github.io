$(document).ready(function (){

    $('.menu-toggler').on('click', function () {

        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        
    });

    $('.top-nav .nav-link').on('click', function () {

        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        
    });

    $('nav a[href*="#"]').on('click', function () {

        $('html, body').animate( {
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500);
        
    });

    $('#up').on('click', function () {

        $('html, body').animate( {
            scrollTop: 0 }, 1000);
        
    });

    AOS.init({
        easing: 'ease',
        duration: 1800
    });

    $('#ajax-contact').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "main.php",
            data: $(this).serialize(),
            success: function (response)
            {
                alert('Great');
                $("#form-messages").text(response.responseText);
            },
            error: function (response){
                $("#form-messages").text(response.responseText);
            }
        });
    });
});