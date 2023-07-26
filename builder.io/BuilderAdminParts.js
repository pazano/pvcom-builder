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

export const backgroundImage = {
  name: 'Background Image',
  type: 'object',
  subFields: [
    {
      name: 'image',
      type: 'file',
      copyOnAdd: false,
      helperText: 'File types: .jpeg .png',
      allowedFileTypes: ['jpeg', 'png'],
    },
    {
      name: 'fit',
      type: 'string',
      helperText: 'how the image fits its container',
      defaultValue: 'cover',
      enum: ['fill', 'cover', 'contain', 'none']
    },
    {
      name: 'vertical position',
      type: 'string',
      helperText: 'position the image vertically in its container if it overflows',
      defaultValue: 'center',
      enum: ['top', 'center', 'bottom']
    },
    {
      name: 'horizontal position',
      type: 'string',
      helperText: 'position the image horizontally in its container if it overflows',
      defaultValue: 'center',
      enum: ['left', 'center', 'right']
    }
  ]
}

export const ctaButton = {
  name: 'CTA Button',
  type: 'object',
  subFields: [
    {
      name: 'label',
      type: 'string',
    },
    {
      name: 'url',
      type: 'string',
      helperText: 'target destination'
    },
    {
      name: 'style',
      type: 'string',
      helperText: 'action styles for the button',
      defaultValue: 'primary',
      enum: ['primary', 'secondary']
    }
  ]
}

export const basicImage = {
  name: 'image',
  type: 'file',
  helperText: 'File types: .jpeg .png',
  allowedFileTypes: ['jpeg', 'png'],
}