$(document).ready(function () {
  $(
    "#category-list .accordion-item .accordion-body .list-group .list-group-item"
  ).click(function () {
    $(
      "#category-list .accordion-item .accordion-body .list-group .list-group-item"
    ).removeClass("active");
    $(this).addClass("active");
  });
});
