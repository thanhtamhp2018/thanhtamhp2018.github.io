$(function () {
    $(document).ready(function () {
        $('.flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 5000,
            animationSpeed: 600,
            controlNav: false,
            directionNav: true,
            controlsContainer: ".flex-container" // the container that holds the flexslider
        });
    });
});