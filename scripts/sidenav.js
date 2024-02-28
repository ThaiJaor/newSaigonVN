$(document).ready(function () {
    const sidenavBtn = document.getElementById("sidenav-btn");
    const sidenav = document.querySelector(".sidenav");
    sidenavBtn.addEventListener('click', () => {
        sidenav.classList.add('slide-in');
        document.querySelector('.main-content').classList.add('blacken');

        document.addEventListener('click', clickaway);
    });

    function clickaway(event) {
        if (!sidenav.contains(event.target) && !sidenavBtn.contains(event.target)) {
            sidenav.classList.remove('slide-in');
            document.querySelector('.main-content').classList.remove('blacken');
            document.removeEventListener('click', clickaway);
        }
    }

    function changeClassBasedOnScreenWidth() {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const mainContent = document.querySelector('.main-content');

        if (screenWidth >= 1200) {
            mainContent.classList.remove('blacken');
        } else if (screenWidth < 1200 && sidenav.classList.contains("slide-in")) {
            mainContent.classList.add('blacken');
        }
    }
    changeClassBasedOnScreenWidth();

    window.addEventListener('resize', changeClassBasedOnScreenWidth);
});