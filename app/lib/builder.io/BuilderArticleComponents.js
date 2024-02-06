import { Builder } from '@builder.io/react';

import './components/hero-blog';

Builder.register('insertMenu', {
  name: 'Article Components',
  items: [
    { name: 'Hero Blog'},
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
