<?php

use Extended\ACF\Fields\Layout;

return Layout::make('Form')
    ->layout('block')
    ->fields([
        graphql_label('Form'),
    ]);
