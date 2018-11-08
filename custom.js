<script>
/*** Open menu itmes with children on click not hover ***/
 
(function($) {
 
jQuery(document).ready(function() {
jQuery('#top-menu li.mega-menu > a, #et-secondary-nav li.mega-menu > a').click(function(e) {
e.preventDefault();
 
jQuery(this).parent().toggleClass('show-submenu');
});
});
 
jQuery(document).click(function(e) {
if(!$(e.target).closest('.show-submenu').length) {
jQuery('.show-submenu').removeClass('show-submenu');
}
});
 
})(jQuery);
	
	jQuery(document).ready(function($) {
		
      	
	$('.et_shop_image').mouseover(function() {
		$('.woocommerce-loop-product__title').show()
});
	  $("#author_bio_wrap_toggle").click(function() {
    	$("#author_bio_wrap").slideToggle( "slow");
	  	if ($("#author_bio_wrap_toggle").text() == "MORE SPECS") {			
        	$("#author_bio_wrap_toggle").html("LESS SPECS")
      	}
	  	else  {		
        	$("#author_bio_wrap_toggle").text("MORE SPECS")
      	}
  	});
		
		$("#author_bio_wrap_toggle2").click(function() {
    	$("#author_bio_wrap2").slideToggle( "slow");
	  	if ($("#author_bio_wrap_toggle2").text() == "MORE SPECS") {			
        	$("#author_bio_wrap_toggle2").html("LESS SPECS")
      	}
	  	else  {		
        	$("#author_bio_wrap_toggle2").text("MORE SPECS")
      	}
  	});	
	
		
		$('.widgettitle').click(function() {
			if ($('.product-categories').is(":hidden")) {
				$('.product-categories').css('display', 'flex');
				$('.product-categories').show();
			} else {
			$('.product-categories').hide();
			}
		});
		
});

</script>