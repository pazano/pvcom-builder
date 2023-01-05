import { Builder } from '@builder.io/react';
import VimeoPlayer from './VimeoPlayer';

Builder.registerComponent(VimeoPlayer,
  {
    name: 'Vimeo',
    image: 'https://f.vimeocdn.com/svg/legacy_view_support/iris_icon_v_64.svg',
    inputs: [
      {
        name: 'videoId',
        type: 'string',
        helperText: 'Video ID of the Vimeo Content'
      },
    ]
  })