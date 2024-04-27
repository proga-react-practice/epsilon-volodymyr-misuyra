import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff', 
    },
  },
});


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffff',
    },
    secondary: {
      main: '#ffff',
    },
    background: {
      default: '#000000', 
    },
  },
});
