import { Builder } from '@builder.io/react';
import { layoutControls } from '../BuilderAdminParts';
import Gallery from './Gallery';

Builder.registerComponent(Gallery,
  {
    name: 'Gallery',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'galleryImages',
        type: 'list',
        copyOnAdd: false,
        subFields: [
          {
            name: 'image',
            type: 'reference',
            modelId: process.env.NEXT_PUBLIC_IMAGE_MODEL_ID
          }
        ],
      },
      {
        name: 'columns',
        type: 'string',
        defaultValue: 'four',
        enum: [
          'two', 'three', 'four'
        ]
      },
      layoutControls,
    ]
  })