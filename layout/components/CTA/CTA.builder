import { Builder } from '@builder.io/react';
import CTA from './CTA';

Builder.registerComponent(CTA,
  {
    name: 'CTA',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'label',
        type: 'string'
      },
      {
        name: 'linkType',
        type: 'string',
        defaultValue: 'http',
        enum: ['http', 'tel', 'mailto']
      },
      {
        name: 'url',
        type: 'string'
      },
      {
        name: 'columnWidth',
        type: 'string',
        defaultValue: 'medium',
        enum: [ 'narrow', 'medium', 'wide' ]
      },
    ]
  })