$(document).ready(function () {
  function headerLoad(callback){
    if (document.readyState === 'complete') {
        callback();
    } else {
        window.addEventListener("load", callback);
    }
  }

  headerLoad(function(){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show-2', entry.isIntersecting);
      });
    }, {
      root: null, // Use the document's viewport as the root
      rootMargin: '10px',
    });
  
    const hiddenElements = document.querySelectorAll(".hidden");
    
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  });
  

  
  $(window).scroll(function () {
    var header = $("#header");
    var divContent = $(".content");
    var headerHeight = header.outerHeight();
    var divContentPosition = divContent.offset().top;

    // If scroll position is past div A
    if ($(window).scrollTop() > divContentPosition - headerHeight) {
      header.addClass("blur-max");
      header.find(".nav .nav-link").addClass("text-dark");
      header.find(".nav .nav-link").removeClass("text-light");
      header.find("i").addClass("text-dark");
      header.find("i").removeClass("text-light");
      // Add class to change header color
    } else {
      header.removeClass("blur-max");
      header.find(".nav .nav-link").removeClass("text-dark");
      header.find(".nav .nav-link").addClass("text-light");
      header.find("i").removeClass("text-dark");
      header.find("i").addClass("text-light");
      // Remove class if not past div content
    }
  });
});
