<?php



class wp_bicameralism_theme {
	
	function init() {
		add_action( 'wp_enqueue_scripts', array( $this, 'wp_bicameralism_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'wp_bicameralism_styles' ) );

		add_action( 'after_setup_theme', array( $this, 'add_theme_support' ) );
		
	}


	/* Enqueue CSS and JS files and dependencies */
	function wp_bicameralism_scripts() {
		
		
		wp_enqueue_script( 'wp-bicameralism-scripts', get_stylesheet_directory_uri() . '/dist/app.js' , array(), '1.0', true );
		$url = trailingslashit( home_url() );
		$path = trailingslashit( parse_url( $url, PHP_URL_PATH ) );
		wp_scripts()->add_data( 'wp-bicameralism-scripts', 'data', sprintf( 'var BicameralismSettings = %s;', wp_json_encode( array(
			'title' => get_bloginfo( 'name', 'display' ),
			'path' => $path,
			'URL' => array(
				'api' => esc_url_raw( get_rest_url( null, '/wp/v2' ) ),
				'root' => esc_url_raw( $url ),
			),
			'woo' => array(
				'url' => esc_url_raw( $url . 'wp-json/wc/v2/' ),
				'consumer_key' => 'ck_abdfad60aeb0bf3e1b9b8d47cd5e5c3293a39d19',
				'consumer_secret' => 'cs_e67839826869e25e7029d06ecddfb5099b58f3dc'
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
		
	}


}

$wpbicameralismtheme = new wp_bicameralism_theme();
$wpbicameralismtheme->init();

?>