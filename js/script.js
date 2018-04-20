function readMore(click) { // <-- put event keyword here
  click.preventDefault(); // <-- call event.preventDefault() first
  $('#show-this-on-click').slideDown(900);
  $('.readless').show();
  $('.readmore').hide();
}

function readLess(click) {
  click.preventDefault();
  $('#show-this-on-click').slideUp(500);
  $('.readless').hide();  
  $('.readmore').show();
}

function readMoreSidebar(click) {
  click.preventDefault();
  $('#learnmoretext').slideDown(500);
  $('.learnmore').hide();  
}

$('.readmore').click(readMore);
$('.readless').click(readLess);
$('.learnmore').click(readMoreSidebar);



