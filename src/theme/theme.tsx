import { createMuiTheme } from "@material-ui/core";
import { cyan, grey, pink } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[400]
    },
    secondary: {
      main: pink[300]
    },
    background: {
      default: grey[200]
    }
  }
});
