<?php

use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Link;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Image;

return [
  Group::make('Header', 'header')
    ->fields([
      Image::make('Logo'),
      Text::make('Label'),
      Repeater::make('Links')
        ->fields([
          Link::make('Link')
        ])
    ])
];
