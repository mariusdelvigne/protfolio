import { createTheme } from '@mui/material/styles';

export const buildTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: mode === 'dark' ? '#9fa8ff' : '#3949ab' },
      secondary: { main: '#00bfa5' },
      background:
        mode === 'dark'
          ? { default: '#12131a', paper: '#1c1e29' }
          : { default: '#f5f6fb', paper: '#ffffff' },
    },
    shape: { borderRadius: 16 },
    typography: {
      fontFamily: 'Roboto, system-ui, sans-serif',
      h2: { fontWeight: 700, letterSpacing: '-0.02em' },
      h4: { fontWeight: 500 },
      button: { textTransform: 'none', fontWeight: 500 },
    },
  });
