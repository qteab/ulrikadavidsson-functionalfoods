<?php

use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\WysiwygEditor;
use Extended\ACF\Fields\ButtonGroup;

return Layout::make('Standard Editor')
    ->layout('block')
    ->fields([
        graphql_label('Standard Editor'),
        ButtonGroup::make('Width', 'width')
            ->choices([
                '100%' => 'Full Width',
                '700px' => 'Narrow Width',
            ]),
        WysiwygEditor::make('Content', 'wysiwyg-content')
            ->required(),
    ]);
