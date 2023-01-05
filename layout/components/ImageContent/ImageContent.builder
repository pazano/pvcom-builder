import { Builder } from '@builder.io/react';
import ImageContent from './ImageContent';

Builder.registerComponent(ImageContent,
  {
    name: 'Image Content',
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
        name: 'title',
        type: 'string'
      },
      {
        name: 'copy',
        type: 'richText'
      },
      {
        name: 'orientation',
        type: 'string',
        defaultValue: 'portrait',
        enum: [ 'portrait', 'landscape' ]
      },
      {
        name: 'imageSide',
        type: 'string',
        copyOnAdd: false,
        helperText: 'changes the amount of vertical space',
        enum: [
          'left',
          'right'
        ]
      },
      {
        name: 'columnWidth',
        type: 'string',
        defaultValue: 'medium',
        enum: [ 'narrow', 'medium', 'wide' ]
      },
      {
        name: 'contentBackground',
        type: 'boolean'
      }
    ]
  })