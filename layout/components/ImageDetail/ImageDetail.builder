import { Builder } from '@builder.io/react';
import ImageDetail from './ImageDetail';

Builder.registerComponent(ImageDetail,
  {
    name: 'Image Detail',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'portfolioImage',
        type: 'reference',
        modelId: '62250208cae5453095dbaf4bd9c43a31',
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
        name: 'contentBackground',
        type: 'boolean'
      }
    ]
  })