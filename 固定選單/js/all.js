$(document).ready(function () {
  $('.m-btn').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('open');
  });
  $('.btn-close').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('open');
  });
});