import { createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: {
      dark: '#127b84',
      main: '#1BB1BD',
      light: '#48c0ca',
    },
    secondary: {
      dark: '#a74d76',
      main: '#EF6EAA',
      light: '#f28bbb',
    },
    background: {
      default: grey[200],
    },
  },
});
