<?php

use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Image;

return Layout::make('Form')
    ->layout('block')
    ->fields([
        graphql_label('Form'),
        Image::make('Background Image')
    ]);
