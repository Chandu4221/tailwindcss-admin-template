$(document).ready(function() {
  $(".sideTrigger").on("click", function() {
    $(".sidebar").toggleClass("active");
  });
  $(".menuTrigger").on("click", function() {
    $(".nav-menu").animate({ height: "toggle" });
  });
});
