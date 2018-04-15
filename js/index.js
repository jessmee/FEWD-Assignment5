/* global $ */

$(document).ready(function() {

  function readMore(event) {
    event.preventDefault();
    $('.readmore').hide();
    $('#show-this-on-click').slideDown(400, function() {
      $('.readless').show();
    });
  }

  function readLess(event) {
    event.preventDefault();
    $('.readless').hide();
    $('#show-this-on-click').slideUp(400, function() {
      $('.readmore').show();
    });
  }

  function learnMore(event) {
    event.preventDefault();
    $('.learnmore').hide();
    $('#learnmoretext').slideDown();
  }

  $('.readmore a').click(readMore);
  $('.readless a').click(readLess);
  $('.learnmore').click(learnMore);
});
