import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@theme/theme';
import AppRouter from '@router/Router';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRouter />
      </Router>
      <CssBaseline />
    </ThemeProvider>
  );
}
