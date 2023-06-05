import { Builder } from '@builder.io/react';
import PullQuote from './PullQuote';

Builder.registerComponent(PullQuote,
  {
    name: 'Pull Quote',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'copy',
        type: 'longText',
      },
    ]
  })