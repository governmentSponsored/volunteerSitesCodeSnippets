(function($) {
  $(document).ready(function() {
  //reddit social media icon
  $( '.pinterest' ).children().attr('title','New Forest Earth on Reddit');
  //homepage featured item URL link change and image enlargement
  var imagesrc = $('ul.product_list_widget').find('img').attr('src');
  if(imagesrc != undefined) { 
  	var before = imagesrc.split('90x90')[0]; 
  	var after = imagesrc.split('90x90')[1];
  	var newsrc = before + '300x300' + after;
  	$('ul.product_list_widget').find('img').attr("src",newsrc)
  		             	   .css('width','300')
  			     	   .css('height','300');  
  }
  //products page, fix size of the similar items
  $('.products').children()
  		.find('li')
  		.css('width','25%')
  		.css('height','25%');

  //center both pieces of text on featured item
  $('ul.product_list_widget').find('a')
  		.css('text-align','center');
  $('ul.product_list_widget').find('span')
  		.css('width','300px')
  		.css('display','block')
  		.css('text-align','center');
  
  //change product description on products pages to additional information
  $('#tab-description h2').text('Additional Information');
  })
})(jQuery);