export const layoutControls = {
  name: 'layout',
  type: 'object',
  subFields: [
    {
      name: 'contentWidth',
      type: 'string',
      copyOnAdd: false,
      defaultValue: 'content',
      enum: ['content', 'wide', 'full']
    },
    {
      name: 'topMargin',
      type: 'string',
      copyOnAdd: false,
      defaultValue: 'default',
      enum: ['default', 'medium', 'high']
    },
    {
      name: 'bottomMargin',
      type: 'string',
      copyOnAdd: false,
      defaultValue: 'default',
      enum: ['default', 'medium', 'high']
    },
  ]
}
