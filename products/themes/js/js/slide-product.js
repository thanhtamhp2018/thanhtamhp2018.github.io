$(function () {
    $('#myTab a:first').tab('show');
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })
})
$(document).ready(function () {
    $('.thumbnail').fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });

    $('#myCarousel-2').carousel({
        interval: 2500
    });
});