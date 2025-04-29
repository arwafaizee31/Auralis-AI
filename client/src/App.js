import React, { useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { getTheme } from './themes/theme';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: 20 }}>
        <Button variant="contained" onClick={toggleMode}>
          Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
        <h1>Hello, MUI Theme!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
