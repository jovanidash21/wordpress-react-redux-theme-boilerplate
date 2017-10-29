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

function cpt_register_blog() {
  $post_type = 'cpt-blog';
  $rest_base = 'blog';
  $slug      = 'blog';
  $menu_icon = 'dashicons-megaphone';

  $labels = array(
    'name'               => _x( 'Blog', 'post type general name' ),
    'singular_name'      => _x( 'Blog', 'post type singular name' ),
    'add_new'            => _x( 'Add Blog', 'rep' ),
    'add_new_item'       => __( 'Add New Blog' ),
    'edit_item'          => __( 'Edit Blog' ),
    'new_item'           => __( 'New Blog' ),
    'view_item'          => __( 'View Blog' ),
    'search_items'       => __( 'Search Blog' ),
    'not_found'          => __( 'Nothing found' ),
    'not_found_in_trash' => __( 'Nothing found in Trash' ),
    'parent_item_colon'  => ''
  );

  $supports = array(
    'title',
    'editor',
    'thumbnail',
    'excerpt'
  );

  $rewrite = array(
    'slug' => $slug
  );

  $args = array(
    'labels'                => $labels,
    'public'                => true,
    'hierarchical'          => true,
    'publicly_queryable'    => true,
    'show_ui'               => true,
    'show_in_rest'          => true,
    'rest_base'             => $rest_base,
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'menu_position'         => null,
    'menu_icon'             => $menu_icon,
    'capability_type'       => 'post',
    'supports'              => $supports,
    'has_archive'           => false,
    'rewrite'               => $rewrite,
    'query_var'             => true
  );

  register_post_type( $post_type, $args );
}

function cpt_register_work() {
  $post_type = 'cpt-work';
  $rest_base = 'work';
  $slug      = 'work';
  $menu_icon = 'dashicons-hammer';

  $labels = array(
    'name'               => _x( 'Work', 'post type general name' ),
    'singular_name'      => _x( 'Work', 'post type singular name' ),
    'add_new'            => _x( 'Add Work', 'rep' ),
    'add_new_item'       => __( 'Add New Work' ),
    'edit_item'          => __( 'Edit Work' ),
    'new_item'           => __( 'New Work' ),
    'view_item'          => __( 'View Work' ),
    'search_items'       => __( 'Search Work' ),
    'not_found'          => __( 'Nothing found' ),
    'not_found_in_trash' => __( 'Nothing found in Trash' ),
    'parent_item_colon'  => ''
  );

  $supports = array(
    'title', 
    'editor', 
    'thumbnail', 
    'excerpt'
  );
  
  $rewrite = array(
    'slug' => $slug
  );

  $args = array(
    'labels'                => $labels,
    'public'                => true,
    'hierarchical'          => true,
    'publicly_queryable'    => true,
    'show_ui'               => true,
    'show_in_rest'          => true,
    'rest_base'             => $rest_base,
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'menu_position'         => null,
    'menu_icon'             => $menu_icon,
    'capability_type'       => 'post',
    'supports'              => $supports,
    'has_archive'           => false,
    'rewrite'               => $rewrite,
    'query_var'             => true
  );

  register_post_type( $post_type, $args );
}

function cpt_register() {
  cpt_register_blog();
  cpt_register_work();
}

add_action( 'init', 'cpt_register' );

?>
