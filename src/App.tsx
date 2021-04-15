import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import {
  ThemeProvider, jssPreset, StylesProvider,
} from '@material-ui/core/styles';
import theme from '@theme/theme';
import AppRouter from '@router/Router';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@redux/store';
import { create } from 'jss';
import jssExtends from 'jss-plugin-extend';
import 'date-fns';

const jss = create({
  plugins: [jssExtends(), ...jssPreset().plugins],
});

export default function App() {
  return (
    <StylesProvider jss={jss}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Curhat ASI</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
    </StylesProvider>

  );
}
