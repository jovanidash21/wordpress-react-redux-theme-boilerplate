<?php

/**
 * Clean ACF groups and import new ones
 */
function acf_admin() {
  global $pagenow;

  if ( ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX ) && current_user_can( 'manage_options' ) ) {
    if ( ($pagenow == 'edit.php' || $pagenow == 'post-new.php') && $_GET["post_type"] == "acf-field-group" && empty($_GET["page"]) ) {

			/* Reload ACF groups from theme folder */
      $json_file_path = get_template_directory().'/acf/acf-json.json';
      $field_groups_in_db = acf_get_field_groups();
      $field_groups_in_json = json_decode(file_get_contents( $json_file_path ), true);

      if ( isset($field_groups_in_json['key']) ) {
        $field_groups_in_json = array( $field_groups_in_json );
      }
      $field_groups_changed = array();

      foreach( $field_groups_in_json as $field_group ) {
        $field_group_in_db = array_filter($field_groups_in_db, function($db_field_group) use ($field_group) {
          return $field_group['key'] == $db_field_group['key'];
        });
        $field_group_in_db = array_values($field_group_in_db);

        if ( empty($field_group_in_db) ) {
          $field_groups_changed[] = $field_group; /*New fields group*/
        }
      }

      foreach( $field_groups_in_db as $field_group ) {
        $last_updated = get_post_meta($field_group['ID'], 'last_updated', true);
        $field_group_in_json = array_filter($field_groups_in_json, function($json_field_group) use ($field_group) {
          return $field_group['key'] == $json_field_group['key'];
        });
        $field_group_in_json = array_values($field_group_in_json);

        if ( empty($field_group_in_json) ) {
          acf_delete_field_group($field_group['ID']);
        } elseif ( $field_group_in_json[0]['last_updated']!=$last_updated ) {
          $field_groups_changed[] = $field_group_in_json[0]; /*Old fields group with new updates*/
          acf_delete_field_group($field_group['ID']);
        }
      }

      $field_groups_changed = array_values($field_groups_changed);
      $ref = array();
      $order = array();

      foreach ( $field_groups_changed as $field_group ) {
        $fields = acf_extract_var($field_group, 'fields');
        $fields = acf_prepare_fields_for_import( $fields );
        $field_group = acf_update_field_group( $field_group );
        update_post_meta($field_group['ID'], 'last_updated', $field_group['last_updated']);
        $ref[ $field_group['key'] ] = $field_group['ID'];
        $order[ $field_group['ID'] ] = 0;

        foreach ( $fields as $field ) {
          if ( empty($field['parent']) ) {
            $field['parent'] = $field_group['ID'];
          } elseif ( isset($ref[ $field['parent'] ]) ) {
            $field['parent'] = $ref[ $field['parent'] ];
          }

          if ( !isset($order[ $field['parent'] ]) ) {
            $order[ $field['parent'] ] = 0;
          }

          $field['menu_order'] = $order[ $field['parent'] ];
          $order[ $field['parent'] ]++;
          $field = acf_update_field( $field );
          $ref[ $field['key'] ] = $field['ID'];
        }
      }
    }
  }
}
add_action( 'admin_init', __NAMESPACE__ . '\\acf_admin', 1 );

function save_acf_field_groups( $post_id, $post, $update ) {
  global $pagenow;

  if ( ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX ) && current_user_can( 'manage_options' ) ) {
    if ( $pagenow == 'post.php' && $post->post_type == 'acf-field-group') {
      $file_php = get_template_directory().'/acf/acf.php';
      $file_json = get_template_directory().'/acf/acf-json.json';

      $ignore_options_fields = array();

      $ignore_options_sub_fields = array();

      /* Save ACF JSON file */
      $json = array();
      $field_groups = acf_get_field_groups();

      foreach ( $field_groups as $field_group ) {
        $group = acf_get_field_group( $field_group['key'] );
        $group['fields'] = acf_get_fields( $group );
        $group['fields'] = acf_prepare_fields_for_export( $group['fields'] );
        $id = acf_extract_var( $group, 'ID' );
        $local = acf_extract_var( $group, 'local' );
        $current_time = date('l, j F Y, h:i:s A');

        if ( $post_id==$id ) {
          $group['last_updated'] = $current_time;
          update_post_meta($post_id, 'last_updated', $current_time);
        } else {
          if ( $last_updated = get_post_meta($id, 'last_updated', true) ) {
            $group['last_updated'] = $last_updated;
          } else {
            $group['last_updated'] = $current_time;
            update_post_meta($id, 'last_updated', $current_time);
          }
        }

        foreach ( $group['fields'] as &$field ) {
          if ( in_array( $field['name'], $ignore_options_fields ) && $field['type']=='select' ) {
            $field['choices'] = array();
          }

          if ( array_key_exists('sub_fields', $field) ) {
            foreach ( $field['sub_fields'] as &$sub_field ) {
              if ( in_array( $sub_field['name'], $ignore_options_sub_fields ) && $sub_field['type']=='select' ) {
                $sub_field['choices'] = array();
              }
            }
          }
        }
        $json[] = $group;
      }
      file_put_contents($file_json, acf_json_encode($json));

      /* Save ACF PHP file */
      $generate = '<?php'."\r\n";
      $generate .= '/*****************************************************************************************************************' . "\r\n";
      $generate .= '* THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY' . "\r\n";
      $generate .= '*****************************************************************************************************************/' . "\r\n" . "\r\n";
      $generate .= "if ( function_exists('acf_add_local_field_group') ) :" . "\r\n" . "\r\n";

      foreach ( $json as $field_group ) {
        $code = var_export($field_group, true);
        $code = str_replace("  ", "\t", $code);
        $code = preg_replace('/([\t\r\n]+?)array/', 'array', $code);
        $code = preg_replace('/[0-9]+ => array/', 'array', $code);
        $generate .= "acf_add_local_field_group({$code});" . "\r\n" . "\r\n";
      }

      $generate .= "endif;";
      file_put_contents($file_php, $generate);
    }
  }
}
add_action( 'save_post', __NAMESPACE__ . '\\save_acf_field_groups', 10, 3);
