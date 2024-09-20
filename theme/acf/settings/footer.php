<?php

use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Link;
use Extended\ACF\Fields\Image;

return [
  Group::make('Footer', 'footer')
    ->fields([
      Image::make('Logo'),
      Text::make('Label'),
      Link::make('Link'),
    ])
];
