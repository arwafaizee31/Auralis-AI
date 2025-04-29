// theme.js
import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode palette
          primary: {
            main: '#1976d2',
          },
          background: {
            default: '#ffffff',
            paper: '#f5f5f5',
          },
        }
      : {
          // Dark mode palette
          primary: {
            main: '#90caf9',
          },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
        }),
  },
});

export const getTheme = (mode) => createTheme(getDesignTokens(mode));
