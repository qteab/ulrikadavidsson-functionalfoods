<?php

use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\Text;
use Extended\ACF\Key;

require_once('to-title-case.php');

class Hidden
{
  public function setParentKey(string $parentKey)
  {
    // Ignore parent key
  }

  public function get(): array
  {
    return [
      'field' => sprintf('field_%s', Key::hash('page_builder_components')),
      'operator' => '==empty',
    ];
  }
}

function graphql_label($label)
{

  return Text::make('Label', 'label')
    ->defaultValue(toTitleCase($label))
    ->conditionalLogic([
      new Hidden(),
    ]);
}
