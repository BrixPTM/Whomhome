jQuery(document).ready(function($) {
  $("label[for='pa_fabric']")[0].id = "fabriccc";
  $("label[for='pa_wood']")[0].id = "wooddd";
  $(".specs_toggle_wrapper").click(function() {
   	$(".specs_wrap").slideToggle( "slow");
	if ($(".specs_toggle_wrapper").text() == "+ MORE SPECS") {			
   	  $(".specs_toggle_wrapper").text("- MORE SPECS")
    } else  {		
      $(".specs_toggle_wrapper").text("+ MORE SPECS")
    }
  });
});

jQuery(document).ready(function($) {
	$("label[for='pa_fabric']")[0].id = "fabriccc";
	$("label[for='pa_metal']")[0].id = "metalll";
	$(".specs_toggle_wrapper").click(function() {
    $(".specs_wrap").slideToggle( "slow");
	  if ($(".specs_toggle_wrapper").text() == "+ MORE SPECS") {			
      	$(".specs_toggle_wrapper").text("- MORE SPECS")
    } else  {		
       	$(".specs_toggle_wrapper").text("+ MORE SPECS")
    	}
  });
});

jQuery(document).ready(function($) {
  $("label[for='pa_metal']")[0].id = "metalll";
  $("label[for='pa_wood']")[0].id = "wooddd";
  $(".specs_toggle_wrapper").click(function() {
   	$(".specs_wrap").slideToggle( "slow");
	if ($(".specs_toggle_wrapper").text() == "+ MORE SPECS") {			
   	  $(".specs_toggle_wrapper").text("- MORE SPECS")
    } else  {		
      $(".specs_toggle_wrapper").text("+ MORE SPECS")
    }
  });
});

document.querySelector('#wooddd').onclick = function() {
  jQuery('.pa_wood').attr('size', 3).toggle(20, "linear");
}

jQuery(document).ready(function($) {
  $("label[for='pa_wood']")[0].id = "wooddd";
  $(".specs_toggle_wrapper").click(function(e) {
    $(".specs_wrap").slideToggle( "slow");
	if ($(".specs_toggle_wrapper").text() == "+ MORE SPECS") {			
      $(".specs_toggle_wrapper").html("- MORE SPECS")
    } else  {		
      $(".specs_toggle_wrapper").html("+ MORE SPECS")
    }
 });
});

jQuery(document).ready(function($) {
  $("label[for='pa_fabric]")[0].id = "fabriccc";
  $(".specs_toggle_wrapper").click(function(e) {
    $(".specs_wrap").slideToggle( "slow");
	if ($(".specs_toggle_wrapper").text() == "+ MORE SPECS") {			
      $(".specs_toggle_wrapper").html("- MORE SPECS")
    } else  {		
      $(".specs_toggle_wrapper").html("+ MORE SPECS")
    }
 });
});

.price {
	text-align: inherit !important;
}
.specs_toggle_wrapper {
	font-size: 11px;
	color: black;
	cursor: pointer;
	width: 40%;
	margin-top: 10px;
}

@media (max-width: 500px) {
	.specs_toggle_wrapper {
	width: 34%;
}	
}