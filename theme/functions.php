<?php

use Extended\ACF\Fields\FlexibleContent;
use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Link;
use Extended\ACF\Fields\Text;
use Extended\ACF\Location;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\WysiwygEditor;

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

register_extended_field_group([
  'key' => 'recipe_info',
  'title' => 'Recipe Info',
  'fields' => [
    Image::make('Image', 'image'),
    WysiwygEditor::make('Description', 'description')
  ],
  'location' => [
    Location::where('post_type', 'recipe'),
  ],
  'style' => 'default',
  'hide_on_screen' => ['the_content'],
  'show_in_graphql' => 1,
  'graphql_field_name' => 'recipeInfo',
]);

function recipe()
{
  $labels = array(
    'name'                  => _x('Recipe', 'Post Type General Name', 'text_domain'),
    'singular_name'         => _x('Recipe', 'Post Type Singular Name', 'text_domain'),
    'menu_name'             => __('Recipe', 'text_domain'),
    'name_admin_bar'        => __('Recipe', 'text_domain'),
    'archives'              => __('Item Archives', 'text_domain'),
    'attributes'            => __('Item Attributes', 'text_domain'),
    'parent_item_colon'     => __('Parent Item:', 'text_domain'),
    'all_items'             => __('All Posts', 'text_domain'),
    'add_new_item'          => __('Add New Post', 'text_domain'),
    'add_new'               => __('Add New Post', 'text_domain'),
    'new_item'              => __('New Post', 'text_domain'),
    'edit_item'             => __('Edit Post', 'text_domain'),
    'update_item'           => __('Update Post', 'text_domain'),
    'view_item'             => __('View Post', 'text_domain'),
    'view_items'            => __('View Post', 'text_domain'),
    'search_items'          => __('Search Post', 'text_domain'),
    'not_found'             => __('Not found', 'text_domain'),
    'not_found_in_trash'    => __('Not found in Trash', 'text_domain'),
    'featured_image'        => __('Featured Image', 'text_domain'),
    'set_featured_image'    => __('Set featured image', 'text_domain'),
    'remove_featured_image' => __('Remove featured image', 'text_domain'),
    'use_featured_image'    => __('Use as featured image', 'text_domain'),
    'insert_into_item'      => __('Insert into item', 'text_domain'),
    'uploaded_to_this_item' => __('Uploaded to this item', 'text_domain'),
    'items_list'            => __('Items list', 'text_domain'),
    'items_list_navigation' => __('Items list navigation', 'text_domain'),
    'filter_items_list'      => __('Filter items list', 'text_domain'),
  );
  $args = array(
    'label'                 => __('Recipe', 'text_domain'),
    'description'           => __('Post Type Description', 'text_domain'),
    'labels'                => $labels,
    'show_in_rest'          => true,
    'supports'              => array('title', 'editor', 'author', 'thumbnail', 'page-attributes'),
    'taxonomies'            => array('category'),
    'hierarchical'          => false,
    'public'                => true,
    'show_ui'               => true,
    'show_in_menu'          => true,
    'menu_position'         => 2,
    'menu_icon'             => 'dashicons-admin-post',
    'show_in_admin_bar'     => true,
    'show_in_nav_menus'     => true,
    'can_export'            => true,
    'has_archive'           => true,
    'exclude_from_search'   => false,
    'publicly_queryable'    => true,
    'capability_type'       => 'post',
    'rewrite'               => array('slug' => 'recept'),
    'show_in_graphql'       => true,
    'graphql_single_name'   => 'recipe',
    'graphql_plural_name'   => 'recipe',
  );
  register_post_type('recipe', $args);
}
add_action('init', 'recipe', 0);
