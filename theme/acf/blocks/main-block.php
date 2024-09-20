<?php

use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\ButtonGroup;
use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\File;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;

return Layout::make('Main Block')
    ->layout('block')
    ->fields([
        graphql_label('Main Block'),
        ButtonGroup::make('Media Type', 'media-type')
            ->wrapper(['width' => '20%'])
            ->choices([
                'image' => 'Image',
                'video' => 'Video',
            ])
            ->defaultValue('image'),
        ButtonGroup::make('Media Position', 'media-position')
            ->wrapper(['width' => '20%'])
            ->choices([
                'left' => 'Left',
                'right' => 'Right',
            ])
            ->defaultValue('left'),
        Image::make('Image', 'image')
            ->wrapper(['width' => '60%'])
            ->instructions('Upload an image, if you want to use a video, this will serve as a poster for the video.')
            ->required(),
        File::make('Video', 'video')
            ->wrapper(['width' => '60%'])
            ->required()
            ->conditionalLogic([
                ConditionalLogic::where('media-type', '==', 'video'),
            ]),
        Text::make('Title', 'title')
            ->required(),
        Textarea::make('Text', 'text')
            ->required(),
    ]);
