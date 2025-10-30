$(document).ready(function () {

    // sidebar
    // add a class
    $(".hamburger").click(function () {
        $(".sidebar").addClass("sidebar-active");
    });
    // // Remove a class
    $(".close").click(function () {
        $(".sidebar").removeClass("sidebar-active");
    });


    // navigation underline
    $(".navigation-li:first-child()").addClass("menu-active");

    $(".navigation-li").click(function () {
        $(".navigation-li").removeClass("menu-active");
        $(this).toggleClass("menu-active");
    });

    // $(".footer-li").click(function () {
    //     $(".footer-li").removeClass("menu-active");
    //     $(this).toggleClass("menu-active");
    // });

});