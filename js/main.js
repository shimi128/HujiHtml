(function ($) {
    'use strict'

    $(function () {
        //Mobile navbar class on open
        var $mobileNavbar = $('.mobile-nav');
        var $mobileCollapsingNavbar = $('#mobile-navbar-menu');

        $mobileCollapsingNavbar.on('show.bs.collapse', function () {
            $mobileNavbar.addClass('collapsed-mobile-nav');
        }).on('hidden.bs.collapse', function () {
            $mobileNavbar.removeClass('collapsed-mobile-nav');
        })

        //inputs
        var $inputField = $('.huji-form .input-wrapper .input-field');

        $inputField.removeClass('active');

        $inputField.on('input', function () {
            if ($(this).val().length > 0) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });

    });
})(jQuery);