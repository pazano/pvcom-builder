import { Builder } from '@builder.io/react';
import TitleCard from './TitleCard';

Builder.registerComponent(TitleCard,
  {
    name: 'Title Card',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'title',
        type: 'string'
      },
      {
        name: 'lede',
        type: 'string'
      },
      {
        name: 'image',
        type: 'file',
        helperText: 'File types: .jpeg .png',
        allowedFileTypes: ['jpeg', 'png'],
      },
    ]
  })