import { Builder } from '@builder.io/react';

import './components/hero';

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
