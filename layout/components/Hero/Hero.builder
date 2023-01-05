import { Builder } from '@builder.io/react';
import Hero from './Hero';

Builder.registerComponent(Hero,
  {
    name: 'Hero',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'text',
        type: 'string'
      },
      {
        name: 'image',
        type: 'file',
        helperText: 'File types: .jpeg .png',
        allowedFileTypes: ['jpeg', 'png'],
      },
      {
        name: 'height',
        type: 'string',
        copyOnAdd: false,
        helperText: 'changes the amount of vertical space',
        enum: [
          'large',
          'medium',
          'small'
        ]
      },
      {
        name: 'imageVerticalPosition',
        type: 'string',
        defaultValue: 'center',
        enum: [ 'top', 'center', 'bottom' ]
      }
    ]
  })