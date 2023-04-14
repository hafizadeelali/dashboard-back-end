// ===== BEGIN: Add and remove active class to sidebar function ===== //
var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector(".sidebar");
var overlay = document.querySelector(".overlay_shadow");

var $side_bar = $(".sidebar");
menu_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    menu_btn.classList.toggle("active");
    overlay.classList.toggle("active");
    if ($side_bar.hasClass("active")) {
        $(".content").css("position", "fixed");
        $(".footer-sec").css("position", "fixed");
        $(".content").css("z-index", "250");
        // $(".sidebar").css("position", "absolute");
        // $(".sidebar").css("top", "87px");
        // $(".sidebar").css("height", "100%");
        $(".overlay_shadow").css("position", "fixed");

    } else {
        $(".content").css("position", "relative");
        $(".footer-sec").css("position", "relative");
        $(".content").css("z-index", "0");
        $(".sidebar").css("position", "absolute");
        // $(".sidebar").css("height", "100%");
    }

});

function myFunction(x) {
    if (x.matches && $side_bar.hasClass("active")) { // If media query matches
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        $(".content").css("position", "relative");
        $(".footer-sec").css("position", "relative");
        $(".sidebar").css("position", "sticky");
        $(".sidebar").css("height", "100%");
    }
    else {

    }
}

var x = window.matchMedia("(min-width: 1200px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
// ===== END: Add and remove active class to sidebar function ===== //


// ===== BEGIN: Function to give margin top to content according to navbar height ===== //
// var heightSlider = $('.navi').height();
// $('.main-container').css({
//     marginTop: heightSlider
// });
// ===== END: Function to give margin top to content according to navbar height ===== //

// if ($side_bar.hasClass("active")) {
//     $(".content").css("position", "fixed");
//     $(".content").css("z-index", "250");
//     $(".dashboard-row").css("margin-left", "-24px");
//     // $(".dashboard-row").css("width", "129%");
//     $(".footer-sec").css("position", "relative");

// } else {
//     $(".dashboard-row").css("margin-left", "0px");
//     // $(".dashboard-row").css("width", "100%");
//     $(".content").css("position", "relative");
//     $(".footer-sec").css("position", "absolute");
// }