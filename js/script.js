$(document).ready(function () {
  $(".menu").click(function (e) {
    e.preventDefault();
    $(".menu-content").addClass("active");
    $(".cover").addClass("active");
  });
  $(".cover").click(function (e) {
    e.preventDefault();
    $(".menu-content").removeClass("active");
    $(".cover").removeClass("active");
  });
});
