jQuery(document).ready(function($) {

    var $searchInput = $('#search-input'),
        $searchButton = $('#search-button');

    $searchButton.on('click', function(e) {
        e.preventDefault();
        var $searchValue = $searchInput.val(),
            $url = 'http://kresge.org/search/' + $searchValue;
        window.location = $url;
    });

});