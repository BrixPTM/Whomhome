add_action( 'woocommerce_after_shop_loop_item', 'display_attribute_for_variations' );
function display_attribute_for_variations(){
    global $product;

    // HERE the taxonomy for the targeted product attribute
    $taxonomy = 'pa_fabric';
	
	$terms = wc_get_product_terms( $product->get_id(), $attribute, array( 'fields' => 'all' ) );

    if ( $product->get_type() == 'variable' ) {
        $output = array();
        foreach ($product->get_available_variations() as $values) {
            foreach ( $values['attributes'] as $attr_variation => $term_slug ) {
                // Targetting "Size" attribute only
                if( $attr_variation === 'attribute_' . $taxonomy ){
                    // Add the size attribute term name value to the array (avoiding repetitions)
                    $output[$term_slug] = get_term_by( 'slug', $term_slug, $taxonomy )->name;
                }
            }
        }
        if ( sizeof($output) > 0 ) {
            echo '<div class="'.$taxonomy.'-variations-terms">' . implode( ', ', $output ).'</div>';
        }
    }
}


//works

function display_attribute_for_variations(){
	global $post;
	$attribute_names = array( 'pa_fabric'); // Add attribute names here and remember to add the pa_ prefix to the attribute name
		
	foreach ( $attribute_names as $attribute_name ) {
		$taxonomy = get_taxonomy( $attribute_name );
		
		if ( $taxonomy && ! is_wp_error( $taxonomy ) ) {
			$terms = wp_get_post_terms( $post->ID, $attribute_name );
			$terms_array = array();
			
	        if ( ! empty( $terms ) && $attribute_name =='pa_fabric') {
		        foreach ( $terms as $term ) {
				   $value = get_term_meta( $term->term_id, 'alg_wc_civs_term_image_image_id', true );
				   $image_src = wp_get_attachment_image_src( $value, $size='gallery_thumbnail' );
			       $archive_link = get_term_link( $term->slug, $attribute_name );
			       $full_line = '<span data-attribute="'.esc_attr($attribute).'" style="margin: 3px; background-image: url('.esc_attr($image_src[0]).')" class="alg-wc-civs-term varTrig image" data-value="' . esc_attr( $term->slug ) . '" ' . selected( sanitize_title( $args['selected'] ), $term->slug, false ) . '>' . '</span>';
			       array_push( $terms_array, $full_line );
		        }
				$output = array_slice($terms_array, 0, 4);
		        echo implode( $output, ' ' );
				echo '+';
			echo sizeof($terms)-4 . " more";
	        }
			
    	}
    }
}
?>			