$(document).ready(function () {
    const moreBtn = $('#more-btn');
    const assets = $('#assets');

    moreBtn.click(function (event) {
        event.stopPropagation();
        moreBtn.toggleClass('active');
        assets.toggleClass('show-1');
    });
});