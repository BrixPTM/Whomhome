<?php
/**
 * Single Product Meta
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/meta.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product;
?>
<div class="product_meta">

	<?php do_action( 'woocommerce_product_meta_start' ); 
		echo '<br><span class="orderSwatch"><a href="https://whomhome.wpengine.com/swatches/"><u>ORDER YOUR FREE SWATCHES!</u></a></span><br><div class="ship_toggle_wrapper"><a id="ship_wrap_toggle" style="text-align: left; cursor: pointer;">+ SHIPPING AND RETURNS</a></div>
<div id="ship_wrap" style="display: none;">
<ul class="shipList">
	<li><span class='ordersShip'><a href="https://whomhome.wpengine.com/shipping-and-returns/"> - ORDERS TYPICALLY SHIP IN 2-4 WEEKS </a><br></span></li>
 	<li><span class='deliveryPlans'><a href="https://whomhome.wpengine.com/shipping-and-returns/"> - WHITE GLOVE DELIVERY </a></span></li>
 	<li><span class='deliveryPlans'><a href="https://whomhome.wpengine.com/warranty/"> - COMPLIMENTARY PROTECTION PLAN </span>
	</a></li>
</ul>
</div>';
	?>

	<?php if ( wc_product_sku_enabled() && ( $product->get_sku() || $product->is_type( 'variable' ) ) ) : ?>
	
	<span class="seeTerms"><a href="https://whomhome.wpengine.com/shipping-and-returns/"><br>SHIPPING AND RETURNS<br><br></a></span>
	
	<p class="price wMember"><?php echo $product->get_price_html(); ?></p>
	
	<?php
/**
 * Description tab
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/tabs/description.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $post;

$heading = esc_html( apply_filters( 'woocommerce_product_description_heading', __( 'Description', 'woocommerce' ) ) );

?>

<?php the_content(); ?>

	<?php do_action( 'woocommerce_product_meta_end' ); ?>
	<?php endif; ?>
		
</div>