<?php
function assets() {

  // Scripts
  wp_enqueue_script( 'react-redux-js', get_stylesheet_directory_uri() . '/dist/build/bundle.js', array(), null, true);

}
add_action( 'wp_enqueue_scripts', 'assets' );
?>
