jQuery(document).ready(function($) {

    var $searchWrapper = $('#search'),
        $searchTrigger = $('#search-trigger'),
        $searchForm = $('#search-form'),
        $navToggleButton = $('#navbar-toggle'),
        $navMenu = $('#nav-primary');

    //Initialize search
    //$searchForm.addClass('collapsed');
    //$searchWrapper.addClass('initialized');
    function collapseSearch(callback) {
        $searchForm.addClass('collapsed');
        callback();
    }
    function initializeSearch() {
        setTimeout(function() {
            $searchWrapper.addClass('initialized');
        }, 300);
    }
    collapseSearch( initializeSearch );

    //Toggle search form, add active class to search toggle, collapse nav menu and remove active class from nav toggle when trigger clicked
    $searchTrigger.on('click', function(e) {
        e.preventDefault();
        $searchForm.toggleClass('active');
        $searchTrigger.toggleClass('active');
        if ( $navToggleButton.hasClass('active') ) {
            $navToggleButton.removeClass('active');
        }
        if ( $navMenu.hasClass('collapsed') ) {
            return;
        } else {
            $navMenu.addClass('collapsed');
        }
    });

});