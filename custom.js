<script>
/*** Open menu itmes with children on click not hover ***/
(function($) {

$('.shopbtt').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
});

$('.varTrig').click(function() {	
	if ($('.varLabel').is(":visible")) {
		$('.varLabel').hide();
		$('.pa_fabric').css({"height": "86px"});
	} else {
		$('.pa_fabric').css({"height": "auto"});
		$(this).next().toggle();
	}
});

jQuery(document).ready(function() {
jQuery('#top-menu li.mega-menu > a').on('click touchstart', function(e) {
	e.preventDefault();
jQuery(this).parent().toggleClass('show-submenu');
});
});
 
jQuery(document).click(function(e) {
if(!$(e.target).closest('.show-submenu').length) {
jQuery('.show-submenu').removeClass('show-submenu');
}
if(!$(e.target).closest('.widgettitle').length) {	
$('.product-categories').hide();
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
		
	$("#ship_wrap_toggle").click(function(e) {
		e.preventDefault();
    	$("#ship_wrap").slideToggle("slow");
		$(".single_variation_wrap").css({"top": "290px", "transition" : "ease-in-out 0.6s"});
	  	if ($("#ship_wrap_toggle").text() == "+ SHIPPING AND RETURNS") {

        	$("#ship_wrap_toggle").html("- SHIPPING AND RETURNS")
      	}
	  	else  {		
        	$("#ship_wrap_toggle").text("+ SHIPPING AND RETURNS")
			$(".single_variation_wrap").css({"top": "170px", "transition" : "ease-in-out 0.6s"});
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
		
		jQuery(document).ready(function($){
			$('.single_add_to_cart_button').click(function(e){
			if ($('#pa_metal').val() == "") {
				e.preventDefault();
				alert("Oops! You're not quite done yet, Please select a metal.");
				return false;
			} else if ($('#pa_wood').val() == "") {
				e.preventDefault();
				alert("Oops! You're not quite done yet, Please select a wood.");
				return false;
			} else if ($('#pa_fabric').val() == "") {
				e.preventDefault();
				alert("Oops! You're not quite done yet, Please select a fabric.");
				return false;
			}
		});
});
		
});
</script>

<!-- Start of whom Zendesk Widget script -->
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=e13ecffe-f322-423c-88bc-21d07d68d5dd"> </script>
<!-- End of whom Zendesk Widget script 
<script type="text/javascript">

window.setTimeout(function() {

$zopim.livechat.button.show();

$zopim.livechat.window.show();

$zopim.livechat.bubble.show();

//You can add more APIs on this line

}, 10000); //time’s in milliseconds - 30 seconds = 30000

</script> -->