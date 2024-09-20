<?php

use Extended\ACF\Fields\Tab;
use Extended\ACF\Location;

function get_blocks()
{
    $path = realpath(__DIR__ . '/acf/blocks');

    if ($path === false) {
        throw new Exception('acf/blocks does not exist!');
    }

    $files = array_diff(scandir($path), ['..', '.']);

    $blocks = array_map(function ($file) use ($path) {
        return include $path . '/' . $file;
    }, $files);

    return $blocks;
}



function register_settings()
{
    $path = realpath(__DIR__ . '/acf/settings');

    if ($path === false) {
        throw new Exception('acf/settings does not exist!');
    }

    $files = array_diff(scandir($path), ['..', '.']);

    $fields = [];

    foreach ($files as $file) {
        $data = include $path . '/' . $file;

        if (!is_array($data)) {
            continue;
        }

        $key = explode('.', $file)[0];
        $title = ucfirst(str_replace(['-', '_'], ' ', $key));

        $fields[] = Tab::make($title, $key . '_tab');
        $fields[] = $data[0];
    }

    register_extended_field_group([
        'title' => 'Site Settings',
        'fields' => $fields,
        'location' => [
            Location::where('options_page', 'site-settings'),
        ],
        'layout' => 'block',
        'show_in_graphql' => 1,
        'graphql_field_name' => 'siteSettings',
    ]);
}
