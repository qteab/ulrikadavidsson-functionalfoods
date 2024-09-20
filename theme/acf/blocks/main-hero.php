<?php

use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\ButtonGroup;
use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\File;
use Extended\ACF\Fields\Link;
use Extended\ACF\Fields\WysiwygEditor;

return Layout::make('Main Hero')
  ->layout('block')
  ->fields([
    graphql_label('Main Hero'),
    WysiwygEditor::make('Ingress'),
    Link::make('Button'),
    WysiwygEditor::make('Additional text'),
    ButtonGroup::make('Media Type', 'media-type')
      ->wrapper(['width' => '20%'])
      ->choices([
        'image' => 'Image',
        'video' => 'Video',
      ])
      ->defaultValue('image'),
    Image::make('Background Image', 'background-image')
      ->required()
      ->wrapper(['width' => '80%'])
      ->conditionalLogic([
        ConditionalLogic::where('media-type', '==', 'image'),
      ]),
    File::make('Background Video', 'background-video')
      ->required()
      ->wrapper(['width' => '80%'])
      ->conditionalLogic([
        ConditionalLogic::where('media-type', '==', 'video'),
      ]),

  ]);
