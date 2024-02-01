window.onload = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => registration.update())
      .catch((err) => console.error(err));

    // Additional logic or functionality for when the page loads
  }
};
