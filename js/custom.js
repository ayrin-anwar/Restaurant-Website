
$(function(){
	
	
	
	  $(window).scroll(function () {
    var anis = $(this).scrollTop();
    if (anis>780) {
      $('.navbar').addClass('header-bg');
    } else {
      $('.navbar').removeClass('header-bg');
    }
  });

	 $('#banner').slick({
  
		arrows:false,
		
		slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
});
	$('.aboutp').slick({
  
		arrows:false,
		
		slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
});
	 var containerEl = document.querySelector('.gal-mix');

            var mixer = mixitup(containerEl); 
	$('.com').slick({
  
		arrows:false,
		
		slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
});

});