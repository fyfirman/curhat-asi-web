import React from "react";
import { Box, Button } from "@material-ui/core";
import logo from "@assets/logo.svg";
import "@assets/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <Box component="span" m={1}>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Box>
      </header>
    </div>
  );
}

export default App;
