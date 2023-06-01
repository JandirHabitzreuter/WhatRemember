import { extendTheme } from '@chakra-ui/react';

export const colors = {
  primary: {
    100: '#E6F6FF',
    200: '#BFE3FF',
    300: '#99D0FF',
    400: '#4DA9FF',
    500: '#0072E6',
    600: '#0066CC',
    700: '#004D99',
    800: '#003366',
    900: '#001A33',
  },
  secondary: {
    100: '#FFF5E6',
    200: '#FFE6BF',
    300: '#FFD699',
    400: '#FFB84D',
    500: '#FF9900',
    600: '#E68A00',
    700: '#995C00',
    800: '#734500',
    900: '#4D2E00',
  },
  background: '#F2F2F2',
};

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  colors,
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'primary.500',
          color: 'white',
          _hover: {
            bg: 'primary.600',
          },
        },
        secondary: {
          bg: 'secondary.500',
          color: 'white',
          _hover: {
            bg: 'secondary.600',
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
  },
});



