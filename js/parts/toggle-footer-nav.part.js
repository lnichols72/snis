jQuery(document).ready(function($) {

    var $navItems = $('#navbar-footer-menu > .nav-item'),
        $footerNavHeadings = $('.nav-heading');

    //Initialize Menu
    $navItems.addClass('collapsed');

    //Toggle sub-menu when heading clicked
    $.each($footerNavHeadings, function() {
        $(this).on('click', function(e) {
            e.preventDefault();
            $(this).parents('.nav-item').toggleClass('active');
        });
    });

});