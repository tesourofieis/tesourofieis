let newWorker;


function showUpdateBar() {
  let snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
}

// The click event on the pop up notification
document.getElementById("reload").addEventListener("click", function () {
  newWorker.postMessage({ action: "skipWaiting" });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then((reg) => {
    reg.addEventListener("updatefound", () => {
      // A wild service worker has appeared in reg.installing!
      newWorker = reg.installing;

      newWorker.addEventListener("statechange", () => {
        // Has network.state changed?
        switch (newWorker.state) {
          case "installed":
            if (navigator.serviceWorker.controller) {
              // new update available
              showUpdateBar();
            }
            // No update available
            break;
        }
      });
    });
  });

  let refreshing;
  navigator.serviceWorker.addEventListener("controllerchange", function () {
    if (refreshing) return;
    window.location.reload();
    refreshing = true;
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
    !(function () {
      var t;
      var e = document.getElementById("darkSwitch2");
      if (e) {
        (t =
          null !== localStorage.getItem("darkSwitch") &&
          "dark" === localStorage.getItem("darkSwitch")),
          (e.checked = t)
            ? document.body.setAttribute("data-theme", "dark")
            : document.body.removeAttribute("data-theme"),
          e.addEventListener("change", function (t) {
            e.checked
              ? (document.body.setAttribute("data-theme", "dark"),
                localStorage.setItem("darkSwitch", "dark"))
              : (document.body.removeAttribute("data-theme"),
                localStorage.removeItem("darkSwitch"));
          });
      }
    })();
  } else {
    // on desktop
    nav.removeClass("fixed-bottom");
    nav.addClass("fixed-top");
    desktop.removeClass("d-none");
    mobile.addClass("d-none");
    !(function () {
      var t;
      var e = document.getElementById("darkSwitch");
      if (e) {
        (t =
          null !== localStorage.getItem("darkSwitch") &&
          "dark" === localStorage.getItem("darkSwitch")),
          (e.checked = t)
            ? document.body.setAttribute("data-theme", "dark")
            : document.body.removeAttribute("data-theme"),
          e.addEventListener("change", function (t) {
            e.checked
              ? (document.body.setAttribute("data-theme", "dark"),
                localStorage.setItem("darkSwitch", "dark"))
              : (document.body.removeAttribute("data-theme"),
                localStorage.removeItem("darkSwitch"));
          });
      }
    })();
  }
}

// On first load
$(function () {
  switchNavbar();
});

// When browser resized
$(window).on("resize", function () {
  switchNavbar();
});
