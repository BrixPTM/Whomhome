.price {
	text-align: inherit !important;
}

jQuery("label[for='pa_fabric']")[0].id = "fabriccc";
jQuery("label[for='pa_wood']")[0].id = "wooddd";

document.querySelector('#fabriccc').onclick = function() { 
	jQuery('.pa_fabric').attr('size', 2).toggle(20, "linear");
}

document.querySelector('#wooddd').onclick = function() { 
    jQuery('.pa_wood').attr('size', 3).toggle(20, "linear");
}
		
