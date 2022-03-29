//jquery

$(document).ready(function() {
  $(".gallery-header h2").click(function() {
    $(".gallery-sec").slideToggle(1000);
  });

var page_url = window.location.href;
var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
if (page_id = "scroll") {
  $("html, body").animate({
    scrollTop: $("#scroll-" + page_id).offset().top - 100
  }, 1000);
  }
});
