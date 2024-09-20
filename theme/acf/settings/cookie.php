<?php

use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\WysiwygEditor;

return [
  Group::make('Cookie consent', 'cookie')
    ->fields([
      Text::make('Title')
        ->defaultValue('Välkommen till vår webbplats!'),
      Text::make('Sub Title')
        ->defaultValue('Denna site använder cookies'),
      WysiwygEditor::make('Text')
        ->instructions('This text must include a link to the privacy policy page.')
        ->defaultValue('<p>Vi använder cookies för att förbättra din upplevelse på vår webbplats. Genom att klicka "acceptera", godkänner du vår användning av cookies.</p> <p><a href="/privacy-policy">Läs mer om vår integritetspolicy</a></p>'),
    ])
];
