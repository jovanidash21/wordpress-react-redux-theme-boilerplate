<?php
function assets() {

  // Styles
  wp_enqueue_style( 'vendor-css', get_stylesheet_directory_uri() . '/dist/styles/vendor.min.css', false, null);
  wp_enqueue_style( 'main-css', get_template_directory_uri() . '/dist/styles/main.min.css', false, null);

  // Scripts
  wp_enqueue_script( 'vendor-js', get_stylesheet_directory_uri() . '/dist/scripts/vendor.min.js', array(), null, true);
  wp_enqueue_script( 'main-js', get_stylesheet_directory_uri() . '/dist/scripts/main.min.js', array(), null, true);
  wp_enqueue_script( 'react-redux-js', get_stylesheet_directory_uri() . '/dist/build/bundle.js', array(), null, true);

}
add_action( 'wp_enqueue_scripts', 'assets' );
?>
