import { Builder } from '@builder.io/react';
import HeroBlog from './hero-blog';

Builder.registerComponent(HeroBlog,
  {
    name: 'Hero Blog',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'description',
        type: 'string'
      },
    ]
  })
