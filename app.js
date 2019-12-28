if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => console.log("service worker registered", reg))
    .catch(err => console.log("service worker not registerd", err));
}

// let today = new Date().toISOString().slice(0, 10);

// var timeLink = document.getElementById("item-dia");

// timeLink.setAttribute("href", "/missa#" + today);
