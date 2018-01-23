<?php

function setup() {

  // Register nav menus
  // https://codex.wordpress.org/Function_Reference/register_nav_menus
  $nav_menus = array(
    'primary' => __( 'Primary' ),
    'footer' => __( 'Footer' )
  );
  register_nav_menus( $nav_menus );

  // Add post thumbnails
  // https://codex.wordpress.org/Post_Thumbnails
  // https://developer.wordpress.org/reference/functions/add_image_size/
  add_theme_support( 'post-thumbnails' );
  add_image_size( 'thumbnails-500x500', 500, 500, true );
  add_image_size( 'thumbnails-1000x1000', 1000, 1000 );

  // Add HTML5 markup support
  // https://developer.wordpress.org/reference/functions/add_theme_support/#html5
  add_theme_support( 'html5', [ 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ] );

}

add_action( 'after_setup_theme', 'setup' );

?>
