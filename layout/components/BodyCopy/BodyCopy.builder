import { Builder } from '@builder.io/react';
import BodyCopy from './BodyCopy';

Builder.registerComponent(BodyCopy,
  {
    name: 'Body Copy',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'copy',
        type: 'richText'
      },
    ]
  })