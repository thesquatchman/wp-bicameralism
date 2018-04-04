<?php
/*
* tip: post this in wp-config.php
* define( 'DISALLOW_FILE_EDIT', true );
*/

class wp_bicameralism_theme {
	
	function init() {
		add_action( 'wp_enqueue_scripts', array( $this, 'wp_bicameralism_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'wp_bicameralism_styles' ) );

		add_action( 'after_setup_theme', array( $this, 'add_theme_support' ) );
		
		// Add fields to the JSON output
		add_action( 'rest_api_init', array( $this, 'register_fields') );
		// disable the /users endpoint
		add_filter('rest_endpoints', array($this, 'hide_users'));

		// remove Woocommerce default styles
		add_filter( 'woocommerce_enqueue_styles', '__return_false' );
	}


	/* Enqueue CSS and JS files and dependencies */
	function wp_bicameralism_scripts() {
		
		
		wp_enqueue_script( 'wp-bicameralism-scripts', get_stylesheet_directory_uri() . '/dist/app.js' , array(), '1.0', true );
		$url = str_replace('http:', 'https:', trailingslashit( home_url() )) ;
		//$url = trailingslashit( home_url() ) ;
		$path = trailingslashit( parse_url( $url, PHP_URL_PATH ) );
		wp_scripts()->add_data( 'wp-bicameralism-scripts', 'data', sprintf( 'var BicameralismSettings = %s;', wp_json_encode( array(
			'title' => get_bloginfo( 'name', 'display' ),
			'path' => $path,
			'user' => get_current_user_id(),
			'URL' => array(
				'api' => esc_url_raw( get_rest_url( null, '/wp/v2' ) ),
				'root' => esc_url_raw( $url ),
			),
			'woo' => array(
				'url' => esc_url_raw( $url . 'wp-json/wc/v2/' ),
				'consumer_key' => 'ck_9350ccd9f1a9fe73553c32f936eaf00c2664ad0e',
				'consumer_secret' => 'cs_657df8156b12eb72b254db2b78911f931115c690'
			),
		) ) ) );
		
	}

	function wp_bicameralism_styles() {
		
		wp_enqueue_style( 'wp-bicameralism-styles', get_template_directory_uri().'/dist/style.css', array(), null, 'all' );
		
	}
	
	
	// theme support
	function add_theme_support(){
		
		add_theme_support( 'post-thumbnails' );
		add_post_type_support( 'page', 'excerpt' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'woocommerce' );
		
	}


	
	function register_fields() {
		// Add Featured Image src to avoid multiple requests
		register_rest_field( 'post',
			'featured_image_src',
			array(
				'get_callback'		=> array( $this, 'get_image_src'),
				'update_callback'	=> null,
				'schema'			=> null
			)
	    );
	    
	}

	function get_image_src( $object, $field_name, $request ) {
	    if($object[ 'featured_media' ] == 0) {
	        return $object[ 'featured_media' ];
	    } 
		$feat_img_array = wp_get_attachment_image_src( $object[ 'featured_media' ], 'thumbnail', true );
	    return $feat_img_array[0];
	}

	function hide_users($endpoints){
    if(isset($endpoints['/wp/v2/users'])){
        unset($endpoints['/wp/v2/users']);
    }
    if(isset($endpoints['/wp/v2/users/(?P<id>[\d]+)'])){
        unset($endpoints['/wp/v2/users/(?P<id>[\d]+)']);
    }
    return $endpoints;
}



}

$wpbicameralismtheme = new wp_bicameralism_theme();
$wpbicameralismtheme->init();

?>