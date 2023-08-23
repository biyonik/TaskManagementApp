import {createTheme, ThemeOptions} from '@mui/material';


const options: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      light: 'rgba(168, 85, 247, .80)',
      main: 'rgba(168, 85, 247, .65)',
      dark: 'rgba(168, 85, 247, .28)',
    },
    background: {
      default: 'rgba(0, 0, 0, .96)',
      paper: '#151515',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    }
};


export const customTheme = createTheme(options);
