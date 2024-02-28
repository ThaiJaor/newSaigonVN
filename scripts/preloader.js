$(document).ready(function () {
  function onLoad(callback) {
    if (document.readyState === "complete") {
      callback();
    } else {
      window.addEventListener("load", callback);
    }
  }

  onLoad(function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.classList.add("fade-1");

      setTimeout(function () {
        preloader.style.display = "none";
        console.log("Loader hidden successfully.");
      }, 1000);
    } else {
      console.error("Unable to find the preloader element.");
    }
  });
});
