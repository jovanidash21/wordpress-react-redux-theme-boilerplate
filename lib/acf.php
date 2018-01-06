<?php

defined( 'ABSPATH' ) or exit;

if ( ! class_exists( 'ACF_Configuration' ) ) {
	class ACF_Configuration {

		public function __construct() {
			add_filter( 'acf/settings/show_admin', array( $this, 'show_hide_acf_menu' ) );
			add_action( 'init', array( $this, 'load_dynamic_choices' ) );
			add_action( 'admin_init', array( $this, 'load_acf_fields' ) );
			add_action( 'init', array( $this, 'add_options_page' ) );
		}

		/**
		 * Show or hide ACF menu item
		 */
		public function show_hide_acf_menu($show) {
			if ( defined( 'WP_ENV' ) && ( 'production' == WP_ENV || 'staging' == WP_ENV ) ) {
				return false;
			}

			if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
				return false;
			}

			if ( !current_user_can('manage_options') ) {
				return false;
			}

			if ( is_child_theme() ) {
				return false;
			}

			return $show;
		}

		/**
		 * Load dynamic choices in a field
		 */
		public function load_dynamic_choices() {
			$auto_load_choices_fields = array('sample');

			foreach ( $auto_load_choices_fields as $load_choices_field ) {
				add_filter( "acf/prepare_field/name=$load_choices_field", function ($field) {
					$choices    = array();
					$field_name = isset($field['_name']) ? $field['_name'] : $field['name'];

					switch ($field_name) {
						case 'sample':
							$choices = array(
								'key' => 'value',
							);
							break;
					}

					if ( !empty($choices) ) {
						$field['choices'] = array();
						foreach ( array_map( 'trim', $choices ) as $key => $choice ) {
							$field['choices'][$key] = $choice;
						}
					}

					return $field;
				});
			}
		}

		/**
		 * Load ACF fields
		 */
		public function load_acf_fields() {
			if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
				return;
			}

			if ( ! function_exists( 'acf_get_field_groups' ) ) {
				return;
			}

			if ( empty($groups = acf_get_field_groups()) ) {
				return;
			}

			$load = [];

			foreach ( $groups as $group ) {
				$local    = acf_maybe_get( $group, 'local', false );
				$modified = acf_maybe_get( $group, 'modified', 0 );
				$private  = acf_maybe_get( $group, 'private', false );

				if ( $local !== 'json' || $private ) {
					// do nothing
				} elseif ( ! $group['ID'] ) {
					$load[ $group['key'] ] = $group;
				} elseif ( $modified && $modified > get_post_modified_time( 'U', true, $group['ID'], true ) ) {
					$load[ $group['key'] ] = $group;
				}
			}

			if ( ! empty($load) ) {
				acf_disable_filters();
				acf_enable_filter( 'local' );
				acf_update_setting( 'json', false );

				foreach ( array_keys( $load ) as $key ) {
					if ( acf_have_local_fields( $key ) ) {
						$load[ $key ]['fields'] = acf_get_local_fields( $key );
					}

					acf_import_field_group( $load[ $key ] );
				}
			}

			$json_dir = get_template_directory() . '/acf-json';
			$delete   = [];

			foreach ( $groups as $group ) {
				$json_file = trailingslashit( $json_dir ) . $group['key'] . '.json';

				if ( !is_readable( $json_file ) ) {
					$delete[] = $group['key'];
				}
			}

			if ( ! empty( $delete ) ) {
				foreach ( $delete as $group_key ) {
					acf_delete_field_group( $group_key );
				}
			}
		}

		/**
		 * Add options page
		 */
		public function add_options_page() {
			if ( current_user_can( 'manage_options' ) && function_exists( 'acf_add_options_page' ) ) {
				acf_add_options_page( array(
					'page_title'    => 'Theme Settings',
					'menu_title'    => 'Theme Settings',
					'menu_slug'     => 'theme-settings',
					'capability'    => 'edit_posts',
					'icon_url'      => 'dashicons-art',
					'update_button' => 'Save Settings',
					'redirect'      => false,
				) );
			}
		}
	}
}

return new ACF_Configuration();
