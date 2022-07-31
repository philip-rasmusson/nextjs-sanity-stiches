import { styled } from '../../stitches.config'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',

  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
    },
    color: {
      red: {
        color: '$red500',
      },
    },
    variant: {
      'headline-3': {
        backgroundColor: 'aqua',
      },
    },
  },
})

export { Text }
