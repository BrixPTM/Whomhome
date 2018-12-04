//Shortcode to show the module
function showmodule_shortcode($moduleid) {
extract(shortcode_atts(array('id' =>'*'),$moduleid)); 
return do_shortcode('[et_pb_section global_module="'.$id.'"][/et_pb_section]');
}
add_shortcode('showmodule', 'showmodule_shortcode');

<?php 
	echo do_shortcode('[et_pb_section global_module="1192"][/et_pb_section]');
?>


	<div><?php echo do_shortcode('[icon name="chevron-up" class="" unprefixed_class=""]') ?> </div>


	Layout settings has color hover


	<?php 
echo do_shortcode('[et_pb_section global_module="1192"][/et_pb_section]');
?>



	echo '<span class="orderSwatch"><a href="http://www.whom-test.dev.cc/swatches/"><u>ORDER YOUR FREE SWATCHES</u></a></span>';
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
			add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 55 );
	

		foreach ( $terms as $term ) {
				if ( in_array( $term->slug, $options ) ) {
					$value = get_term_meta( $term->term_id, 'alg_wc_civs_term_image_image_id', true );
					
					$image_src = wp_get_attachment_image_src( $value, array(36,36) );
					
					$html  .= '<span data-attribute="'.esc_attr($attribute).'" style="background-image: url('.esc_attr($image_src[0]).')" class="alg-wc-civs-term image" data-value="' . esc_attr( $term->slug ) . '" ' . selected( sanitize_title( $args['selected'] ), $term->slug, false ) . '>' . '</span>';
					
					$html .= '<div class="tago" style="position: relative; background-image: url('.esc_attr($image_src[0]).'); width: 100px; height: 100px; margin-left: 2px; padding: 10px" > test';
				
				$html .= '</div>';
				
				}
				
				

			}






			// social share

			<span class='socialShare'><br><br> SHARE </span>
	<?php 

	echo do_shortcode('[Sassy_Social_Share style="background-color:#f3f2ef;"]');
?>



$('.varTrig').click(function() {
		if ($('.varLabel').is(":hidden")) {
			$(this).next().toggle();
			$(this).parent().css({"height": "auto"});
		} else {
			$('.varLabel').hide();
			$('.pa_fabric').css({"height": "86px"});
		}
});

   <p class="form-row form-row-first">
       <input type="text" class="input-text" name="first_name" id="reg_first_name" placeholder="FIRST NAME" value="<?php if ( ! empty( $_POST['first_name'] ) ) esc_attr_e( $_POST['first_name'] ); ?>" />
       </p>
       <p class="form-row form-row-last">
       <input type="text" class="input-text" name="last_name" id="reg_last_name" placeholder="LAST NAME"value="<?php if ( ! empty( $_POST['last_name'] ) ) esc_attr_e( $_POST['last_name'] ); ?>" />
       </p>




			 <form role="search" method="get" class="ds-hide et-search-form" action="https://whomhome.wpengine.com/" style="max-width: 149px; ; font-family:'Acaslon', Palatino; border: none; background-color: #f3f2ef; margin-left: 26%"> 	<input type="search" class="ds-hide et-search-field" placeholder="SEARCH" value="" name="s" title="Search for:" style="font-size: 14px"></form>