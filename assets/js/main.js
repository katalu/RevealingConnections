
/*
    Spatial by TEMPLATED
    templated.co @templatedco
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function () {
    var $window = $(window),
        $body = $('body');

    // Remove any existing .navPanelToggle and #navPanel
    $('.navPanelToggle').remove();
    $('#navPanel').remove();

    // Append the .navPanelToggle to the body
    $('<a href="#navPanel" class="navPanelToggle"><span class="fa fa-bars"></span></a>').appendTo($body);

    // Create the Navigation Panel
    $(
        '<div id="navPanel">' +
            $('#nav').html() +
            '<a href="#navPanel" class="close"></a>' +
        '</div>'
    )
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
        });
});
})(jQuery);
