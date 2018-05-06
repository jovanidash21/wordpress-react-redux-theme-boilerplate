<?php

function revision() {

  // Styles
  wp_enqueue_style( 'vendor-css', get_template_directory_uri() . '/dist/styles/vendor.css', false, '3c1f02dfbee6d1d288202642ad1aa8d3');
  wp_enqueue_style( 'main-css', get_template_directory_uri() . '/dist/styles/main.css', false, '2e307dedcbc47722079aadc3c8ebd449');

  // Scripts
  wp_enqueue_script( 'vendor-js', get_template_directory_uri() . '/dist/scripts/vendor.js', array(), '069b3093b85f9af54a50ec44831755e2', true );
  wp_enqueue_script( 'main-js', get_template_directory_uri() . '/dist/scripts/main.js', array(), 'cf0e6be15a402d425b1a0383ddd5452b', true );

}

add_action( 'wp_enqueue_scripts', 'revision', 101 );

?>
