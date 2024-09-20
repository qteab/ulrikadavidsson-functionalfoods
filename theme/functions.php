<?php

use Extended\ACF\Fields\FlexibleContent;
use Extended\ACF\Location;


require_once('vendor/autoload.php');
require_once('helpers.php');
require_once('acf/utils/graphql-label.php');
require_once('acf/utils/to-snake-case.php');

if (!function_exists('acf_add_local_field_group')) {
  add_action('admin_notices', function () {
    printf('<div class="%1$s"><p>%2$s</p></div>', esc_attr('notice notice-error'), esc_html('Avanced Custom Fields PRO must be activated!'));
  });
}


if (function_exists('acf_add_local_field_group')) {
  register_extended_field_group([
    'key' => 'page_builder',
    'title' => 'Page Builder',
    'fields' => [
      FlexibleContent::make('Components')
        ->buttonLabel('Add a block')
        ->layouts(get_blocks())
    ],
    'location' => [
      Location::where('post_type', 'page'),
    ],
    'style' => 'default',
    'hide_on_screen' => ['the_content'],
    'show_in_graphql' => 1,
    'graphql_field_name' => 'flexible',
  ]);

  register_settings();
}

if (function_exists('acf_add_options_page')) {
  acf_add_options_page([
    'page_title' => __('Site settings', 'theme'),
    'menu_title' => __('Site settings', 'theme'),
    'menu_slug' => 'site-settings',
    'capability' => 'manage_options',
    'redirect' => false,
    'show_in_graphql' => true,
    'graphql_field_name' => 'siteSettings'
  ]);
}
