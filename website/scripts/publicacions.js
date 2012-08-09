$(window).load(function () {
    $('#publicacions .projecte').isotope({ filter: ".publicacionsPremis" });
    $('#publicacions .projecte div').each(function () {
        $(this).removeClass("hide");
    });
    $('#filters a').click(function () {
        var selector = $(this).attr('data-filter');
        $('#publicacions .projecte').isotope({ filter: selector });
        return false;
    });
});