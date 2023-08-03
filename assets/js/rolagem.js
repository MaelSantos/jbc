// $(document).ready(function () {
//     $(".inicio_menu").click(function () {
//         posicao = $("#inicio").offset().top
//         $("html").animate({ scrollTop: posicao });
//     });
//     $(".perfil_menu").click(function () {
//         posicao = $("#perfil").offset().top
//         $("html").animate({ scrollTop: posicao });
//     });
//     $(".biografia_menu").click(function () {
//         posicao = $("#biografia").offset().top
//         $("html").animate({ scrollTop: posicao });
//     });
//     $(".producoes_menu").click(function () {
//         posicao = $("#producoes").offset().top
//         $("html").animate({ scrollTop: posicao });
//     });
//     $(".contato_menu").click(function () {
//         posicao = $("#contato").offset().top
//         $("html").animate({ scrollTop: posicao });
//     });
// });

$(".navbar .nav-link").on("click", function () {
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
});

$(document).ready(function () {
    $(".inicio_menu").click(function () {
        $("#carousel_page").carousel(0);
    });
    $(".perfil_menu").click(function () {
        $("#carousel_page").carousel(1);
    });
    $(".biografia_menu").click(function () {
        $("#carousel_page").carousel(2);
    });
    $(".producoes_menu").click(function () {
        $("#carousel_page").carousel(3);
    });
    $(".contato_menu").click(function () {
        $("#carousel_page").carousel(4);
    });
});