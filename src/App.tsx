import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "@navigation/RouterConfig";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "@theme/theme";
import { CssBaseline } from "@material-ui/core";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RouterConfig />
      </Router>
      <CssBaseline />
    </ThemeProvider>
  );
}
