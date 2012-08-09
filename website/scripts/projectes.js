$(function () {
    var imatgePetitaAnterior = $('#imatgesProjectes .contenidorImatges img').attr('src');
    $('#imatgesProjectes .contenidorImatges li a').mouseover(function () {
        $('#imatgesProjectes .imatgeGran img').attr('src', $(this).find('img').attr('src'));
    });
    $('#imatgesProjectes a').mouseout(function () {
        $('#imatgesProjectes .imatgeGran img').attr('src', imatgePetitaAnterior);
    });

    //$('#menuProjectes').tinyscrollbar({ axis: 'x' });

    var imatgePreviaAnterior = $('#imatgesProjectes .contenidorImatges img').attr('src');
    var $imatgePrevia = $('#menuProjectes .petites');
    $imatgePrevia.find("a").mouseover(function () {
        var nodeId = $(this).attr('data-id');
        //alert(nodeId);
        $('.descripcioProjecte').addClass("hide");
        $('.contenidorImatges').addClass("hide");
        $('#imatgesProjectes .imatgeGran img').attr('src', $("#menuProjectes .petites a[data-id =" + nodeId + "]").find("img").attr('src'));
    });
    $('#menuProjectes .petites li').mouseleave(function () {
        $('.descripcioProjecte').removeClass("hide");
        $('.contenidorImatges').removeClass("hide");
        $('#imatgesProjectes .imatgeGran img').attr('src', imatgePreviaAnterior);
    });

});

