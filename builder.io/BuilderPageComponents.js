import { Builder } from '@builder.io/react';

import './components/hero';

Builder.register('insertMenu', {
  name: 'Custom Components',
  items: [
    { name: 'Hero' },
  ],
})
