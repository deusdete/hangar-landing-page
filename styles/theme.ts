import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3c096c',
    },
    secondary: {
      main: '#ff9100',
    },
    error: {
       main: '#d62828',
    },
    warning: {
       main: '#f77f00',
    },
    info: {
       main: '#0081a7',
    },
    success: {
       main: '#00afb9',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;