$(function() {
  $("#nav-list a").on("click", function(event) {
    $("#content div").each(function() {
      $(this).removeClass("active");
    });
    $("#content #" + this.id).toggleClass("active");
  });
});