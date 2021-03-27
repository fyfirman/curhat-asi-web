import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@theme/theme';
import AppRouter from '@router/Router';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@redux/store';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PersistGate
        loading={<div>Mohon tunggu</div>}
        persistor={persistor}
      >
        <Router>
          <AppRouter />
        </Router>
        <CssBaseline />
      </PersistGate>

    </ThemeProvider>
  );
}
