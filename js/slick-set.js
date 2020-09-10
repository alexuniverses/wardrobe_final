$('.multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	      }
	    }
    ]
});