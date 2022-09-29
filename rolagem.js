$(document).ready(function () {
    $(".inicio_menu").click(function () {
        posicao = $("#inicio").offset().top
        $("html").animate({ scrollTop: posicao });
    });
    $(".biografia_menu").click(function () {
        posicao = $("#biografia").offset().top
        $("html").animate({ scrollTop: posicao });
    });
    $(".producoes_menu").click(function () {
        posicao = $("#producoes").offset().top
        $("html").animate({ scrollTop: posicao });
    });
    $(".contato_menu").click(function () {
        posicao = $("#contato").offset().top
        $("html").animate({ scrollTop: posicao });
    });
});