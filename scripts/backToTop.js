$(document).ready(function () {
    let mybutton = document.getElementById("to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.classList.add("active");
        } else {
            mybutton.classList.remove("active");
        }
    }

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    if (mybutton) {
        mybutton.addEventListener("click", backToTop);
    }

});