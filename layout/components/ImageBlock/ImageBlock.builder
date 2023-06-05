import { Builder } from '@builder.io/react';
import ImageBlock from './ImageBlock';

Builder.registerComponent(ImageBlock,
  {
    name: 'Image Block',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'image',
        type: 'file',
        copyOnAdd: false,
        allowedFiletypes: [ 'jpeg', 'png' ]
      },
      {
        name: 'altText',
        type: 'string'
      },
      {
        name: 'displayWidth',
        type: 'string',
        defaultValue: 'content',
        enum: [ 'content', 'wide', 'full' ]
      },
    ]
  })