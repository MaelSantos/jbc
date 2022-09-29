$(document).ready(function () {
    $(".inicio_menu").click(function () {

        posicao = $("#inicio").offset().top
        console.log(posicao);
        // console.log($(document).offset().top);
        // if ($(document).offset().top < posicao)
        $("html").animate({ scrollTop: posicao });

    });
    $(".biografia_menu").click(function () {
        posicao = $("#biografia").offset().top
        console.log(posicao);
        $("html").animate({ scrollTop: posicao });
    });
    $(".producoes_menu").click(function () {
        posicao = $("#producoes").offset().top
        console.log(posicao);
        $("html").animate({ scrollTop: posicao });
    });
    $(".contato_menu").click(function () {
        posicao = $("#contato").offset().top
        console.log(posicao);
        $("html").animate({ scrollTop: posicao });
    });
});