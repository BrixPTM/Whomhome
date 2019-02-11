<script>
function goBack() {
    window.history.back();
}
  var openWidget = function() {
    document.getElementById('fc_frame').style.visibility = 'visible';
    window.fcWidget.open();
  };
</script>
<div id="custom_fc_button" style="visibility:hidden;">
<a id="open_fc_widget" onclick="openWidget()" style="cursor:pointer;"><span class="chatButton" style="background: #727272; padding: 3% 16%; color: white; font-family:'Raleway'; letter-spacing: 2px; font-size: smaller"> CHAT <img class="chatIcon" style="width: 9%; height: 16px; margin-bottom: -2px" src="https://whomhome.wpengine.com/wp-content/uploads/2019/02/chat_icon-copy.jpg" alt="chat"></span></a>
</div>
<script src="https://wchat.freshchat.com/js/widget.js" async></script>
<script>
  window.fcSettings = {
    token: "2f9a81ff-3951-482e-bbaa-16b700792d84",
    host: "https://wchat.freshchat.com",
	config: {
	  headerProperty: { 
		hideChatButton: true,
	  	backgroundColor: '#727272',
	  },
      content: {
        headers: {
          chat_help: 'Reach out to us if you have any questions',
        }
      }
    },
    onInit: function() {
      window.fcWidget.on("widget:loaded",function() {
        document.getElementById('custom_fc_button').style.visibility = 'visible';
        window.fcWidget.on("unreadCount:notify", function(resp) {
          console.log(resp);
          test = resp;
        });
        window.fcWidget.on("widget:closed", function() {
          document.getElementById('fc_frame').style.visibility = 'hidden';
          document.getElementById('open_fc_widget').style.visibility = 'visible';
        });
        window.fcWidget.on("widget:opened", function(resp) {
          document.getElementById('open_fc_widget').style.visibility = 'hidden';
        });
      });
    },
  };

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

$('.varTrig').click(function() {	
	if ($('.varLabel').is(":visible")) {
		$('.varLabel').hide();
		$('.pa_fabric').css({"height": "86px"});
	} else {
		$(this).parent().css({"height": "auto"});
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
		
	$("#ship_wrap_toggle").click(function(e) {
		e.preventDefault();
    	$("#ship_wrap").slideToggle("slow");
	  	if ($("#ship_wrap_toggle").text() == "+ SHIPPING AND RETURNS") {

        	$("#ship_wrap_toggle").text("- SHIPPING AND RETURNS")
      	}
	  	else  {		
        	$("#ship_wrap_toggle").text("+ SHIPPING AND RETURNS")
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
			if ($('#pa_fabric').val() == "") {
				e.preventDefault();
				$('.hover_bkgr_fricc').show();
				$('.popFabric').show();
    			$('.hover_bkgr_fricc').click(function(){
        			$('.hover_bkgr_fricc').hide();
					$('.popFabric').hide();
    			});
    			$('.popupCloseButton').click(function(){
        			$('.hover_bkgr_fricc').hide();
					$('.popFabric').hide();
    			});
				return false;
			} else if ($('#pa_wood').val() == "") {
				e.preventDefault();
       			$('.hover_bkgr_fricc').show();
				$('.popWood').show();
    			$('.hover_bkgr_fricc').click(function(){
        			$('.hover_bkgr_fricc').hide();
					$('.popWood').hide();
    			});
    			$('.popupCloseButton').click(function(){
        			$('.hover_bkgr_fricc').hide();
					$('.popWood').hide();
    			});
				return false;
			} else if ($('#pa_metal').val() == "") {
				e.preventDefault();
				$('.hover_bkgr_fricc').show();
				$('.popMetal').show();
    			$('.hover_bkgr_fricc').click(function(){
        			$('.hover_bkgr_fricc').hide();
					$('.popMetal').hide();
    			});
    			$('.popupCloseButton').click(function(){
        			$('.hover_bkgr_fricc').hide();
					$('.popMetal').hide();
    			});
				return false;
			}
		});
});
		
	$(document).ready(function() {
    setTimeout(function() { $('.optinButton').show() }, 100);
	setTimeout(function() { $('.et_pb_button').show() }, 100);
});
					  
});
	
</script>