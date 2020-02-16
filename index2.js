// sortble by jquery UI
$(".main__order--type").sortable();


// mouse click to open new section
$('.main__new--button').click(function() {
  $('#write').fadeIn().attr('style', 'display:block');

});


// when he hit save fade out and add new order
$('.write__add--button').click(function(event) {

  // STORE VALUE INSIDE VARIBLE val() for taking the valu thats in the input and use it.
  var thisValue = $('.section__add__order__input').val();
  // ADD NEW ORDER TO TAGSHOLDER ELEMNT
  $('.main__order--type').append('<div class="input-group mb-3"><div class="added__order__div input-new-order"><p class="new-order-p">' + thisValue + '</p><i class="fas fa-user-friends custom-icon fa-lg"></i><i class="fas fa-arrows-alt"></i></div></div>');

  // EMPTY THE FEILD
  $('.section__add__order__input').val('');
  // fade out to hide save new order section



});