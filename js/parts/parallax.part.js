jQuery(document).ready(function($) {

    $("#hero-unit").css('background', 'transparent').parallax({
        imageSrc: 'img/hero-bg.jpg',
        speed: 0.5,
        zIndex: -100,
        positionX: 'center',
        positionY: 'bottom',
        bleed: 10,
        iosFix: true,
        //androidFix: true
    });

});