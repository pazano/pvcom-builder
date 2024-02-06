import { Builder } from '@builder.io/react';
import { basicImage } from '../BuilderAdminParts';
import Hero from '@/components/hero';

Builder.registerComponent(Hero,
  {
    name: 'Hero',
    image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/view-split.svg',
    inputs: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'description',
        type: 'string'
      },
      {
        name: 'primaryCta',
        type: 'object',
        subFields: [
          {
            name: 'label',
            type: 'string'
          },
          {
            name: 'url',
            type: 'string'
          },
          {
            name: 'style',
            type: 'string',
            defaultValue: 'primary',
            enum: ['primary', 'secondary']
          }
        ]
      },
      {
        name: 'secondaryCta',
        type: 'object',
        subFields: [
          {
            name: 'label',
            type: 'string'
          },
          {
            name: 'url',
            type: 'string'
          },
          {
            name: 'style',
            type: 'string',
            defaultValue: 'primary',
            enum: ['primary', 'secondary']
          }
        ]
      },
      basicImage,
    ]
  })
