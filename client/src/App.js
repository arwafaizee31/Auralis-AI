import React, { useMemo, useState } from 'react';

import { ThemeProvider, CssBaseline, IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { getTheme } from './themes/theme';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Box>
      <Box p={2}>
        <h1>Welcome to My Themed App</h1>
      </Box>
    </ThemeProvider>
  );
}

export default App;
