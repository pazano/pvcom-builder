import { Builder } from '@builder.io/react';
import ProfileCard from './ProfileCard';

Builder.registerComponent(ProfileCard,
  {
    name: 'ProfileCard Card',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'name',
        type: 'string',
      },
      { name: 'profession',
        type: 'string',
      },
      {
        name: 'description',
        type: 'longText',
      },
      {
        name: 'image',
        type: 'file',
        helperText: 'File types: .jpeg .png',
        allowedFileTypes: ['jpeg', 'png'],
      },
    ]
  })