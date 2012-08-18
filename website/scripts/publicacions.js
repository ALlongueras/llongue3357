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
$(document).ready(function () {
//    $(".publicacionsPremis img").click(function() {
//        $(".publicacionsPremis").find("#publicacions-fancybox").removeClass("#publicacions-fancybox");
//        this.add
//    });
    $("#publicacions-fancybox").fancybox({
        helpers: {
            title: {
                type: 'float'
            }
        }
    });

    //    $("#single_2").fancybox({
    //        openEffect: 'elastic',
    //        closeEffect: 'elastic',

    //        helpers: {
    //            title: {
    //                type: 'inside'
    //            }
    //        }
    //    });

    //    $("#single_3").fancybox({
    //        openEffect: 'none',
    //        closeEffect: 'none',
    //        helpers: {
    //            title: {
    //                type: 'outside'
    //            }
    //        }
    //    });

    //    $("#single_4").fancybox({
    //        helpers: {
    //            title: {
    //                type: 'over'
    //            }
    //        }
    //    });
}); 