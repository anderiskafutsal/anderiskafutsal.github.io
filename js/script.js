$('a[href="#section_fasilitas"]').click(function(){
  event.preventDefault();
  $.scrollTo($('#section_fasilitas'), 1000);
});

$('a[href="#section_lokasi"]').click(function(){
  event.preventDefault();
  $.scrollTo($('#section_lokasi'), 1000);
});

$('a[href="#section_booking"]').click(function(){
  event.preventDefault();
  $.scrollTo($('#section_booking'), 1000);
});