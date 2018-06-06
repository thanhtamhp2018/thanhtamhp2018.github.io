$(function () {
    $('#myTab a:first').tab('show');
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});
$(document).ready(function () {
    $('.thumbnail').fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });

    $('#myCarousel').carousel({
        interval: 3000
    });
    $('#myCarousel-1').carousel({
        interval: 3000
    });
    $('#myCarousel-2').carousel({
        interval: 3000
    });
    $('#myCarousel-3').carousel({
        interval: 3000
    });
    $('#myCarousel-4').carousel({
        interval: 3000
    });
    $('#myCarousel-5').carousel({
        interval: 3000
    });
    $('#myCarousel-6').carousel({
        interval: 3000
    });
    $('#myCarousel-7').carousel({
        interval: 3000
    });
});