jQuery(document).ready(function($) {

    var $navToggleButton = $('#navbar-toggle'),
        $navMenu = $('#nav-primary'),
        $searchForm = $('#search-form'),
        $searchTrigger = $('#search-trigger');

    //Initialize Menu
    //$navMenu.addClass('collapsed');
    function collapseNav(callback) {
        $navMenu.addClass('collapsed');
        callback();
    }
    function initializeNav() {
        setTimeout(function() {
            $navMenu.addClass('initialized');
        }, 300);
    }
    collapseNav( initializeNav );

    //Toggle menu, add active class to nav toggle, collapse search and remove active class from search toggle when button clicked
    $navToggleButton.on('click', function () {
        $(this).toggleClass('active');
        $navMenu.toggleClass('collapsed');
        if ( $searchForm.hasClass('active') ) {
            $searchForm.removeClass('active');
        }
        if ( $searchTrigger.hasClass('active') ) {
            $searchTrigger.removeClass('active');
        }
    });

});