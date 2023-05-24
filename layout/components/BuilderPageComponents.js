import { Builder } from '@builder.io/react';

import './Hero/Hero.builder';
import './TitleCard/TitleCard.builder';
import './ProfileCard/ProfileCard.builder';
import './Gallery/Gallery.builder';
import './ImageContent/ImageContent.builder';
import './VimeoPlayer/VimeoPlayer.builder';
import './CTA/CTA.builder';

Builder.register('insertMenu', {
  name: 'Custom Components',
  items: [
    { name: 'Hero' },
    { name: 'Title Card'},
    { name: 'Profile Card'},
    { name: 'Gallery'},
    { name: 'Image Content'},
    { name: 'Vimeo'},
    { name: 'CTA' }
  ],
})
