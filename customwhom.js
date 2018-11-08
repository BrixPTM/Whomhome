<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">

<script>
	
function goBack() {
    window.history.back();
}
</script>


<script>
/*** Open menu itmes with children on click not hover ***/
(function($) {

$('.shopbtt').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
});
	

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

// end hamburger
	jQuery(document).ready(function($) {
	$('.et_shop_image').mouseover(function() {
		$('.woocommerce-loop-product__title').show()
});
	  $("#specs_wrap_toggle").click(function(e) {
    	$("#specs_wrap").slideToggle( "slow");
	  	if ($("#specs_wrap_toggle").text() == "+ MORE SPECS") {			
        	$("#specs_wrap_toggle").html("- MORE SPECS")
      	}
	  	else  {		
        	$("#specs_wrap_toggle").text("+ MORE SPECS")
      	}
  	});
		
		$('.widgettitle').click(function(e) {
			e.preventDefault();
			if ($('.product-categories').is(":hidden")) {
				$('.product-categories').css('display', 'flex').show();
			} else {		
				$('.product-categories').hide();
			}
		});
		
		$("#contact-form").submit(function(e){
			e.preventDefault();
			$("#contact-form").hide();
			$(".et_pb_column_2").css({"font-size": "0.8em",
									  "margin-bottom": "25%"
									 }).append("THANK YOU FOR CONTACTING US!");
		});
		
		$("#swatch-form").submit(function(e){
			e.preventDefault();
			$("#swatch-form").hide();
			$("#swatch").css({"font-size": "0.8em",
							  		  "text-align": "center",
									  "margin-bottom": "25%"
									 }).append("YOUR SWATCHES ARE ON THE WAY!");
		});
});
</script>