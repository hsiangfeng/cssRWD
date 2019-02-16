$(document).ready(function () {
  $('.m-btn').on('click', function (e) {
    e.preventDefault();
    console.log('1234');
    $('.m-topmanu').slideToggle();
  });
});