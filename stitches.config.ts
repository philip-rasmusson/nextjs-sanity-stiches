import { createStitches } from '@stitches/react'

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'Comfortaa, Helvetica Neue, sans-serif',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
      red500: 'tomato',
      gray600: 'hsl(206,5%,53%)',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px',
    },
    space: {
      1: '5px',
      2: '10px',
    },
  },
})
