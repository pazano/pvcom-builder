import { Builder } from '@builder.io/react';

import './TitleCard/TitleCard.builder';
import './BodyCopy/BodyCopy.builder';
import './ImageContent/ImageContent.builder';
import './VimeoPlayer/VimeoPlayer.builder';
import './CTA/CTA.builder';

Builder.register('insertMenu', {
  name: 'Article Components',
  items: [
    { name: 'Title Card'},
    { name: 'Body Copy'}
  ],
})

Builder.register('insertMenu', {
  name: 'Page Components',
  items: [
    { name: 'Image Content' },
    { name: 'Vimeo' },
    { name: 'CTA' }
  ]
})
