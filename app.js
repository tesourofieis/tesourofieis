if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/sw.js");
  });
}

var win = $(this); // browser window
var nav = $("#main-nav"); // your navigation bar
var desktop = $(".desktop");
var mobile = $(".mobile");

function switchNavbar() {
  if (win.width() < 768) {
    // on mobile
    nav.removeClass("fixed-top");
    nav.addClass("fixed-bottom");
    mobile.removeClass("d-none");
    desktop.addClass("d-none");
  } else {
    // on desktop
    nav.removeClass("fixed-bottom");
    nav.addClass("fixed-top");
    desktop.removeClass("d-none");
    mobile.addClass("d-none");
  }
}

// On first load
$(function() {
  switchNavbar();
});

// When browser resized
$(window).on("resize", function() {
  switchNavbar();
});
