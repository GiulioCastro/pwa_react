import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, blue, indigo } from '@mui/material/colors';
import { CssBaseline, GlobalStyles } from '@mui/material';

import RouteApp from 'route/RouteApp';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: grey[50],
    },
    secondary: {
      main: indigo[500],
      contrastText: '#fff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },  
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const globalStyles = {
  html: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    height: '100%',
    width: '100%',
    "::-webkit-scrollbar": {
      height: theme.spacing(0.5),
      width: theme.spacing(0.5)
    },
    "::-webkit-scrollbar-track": {
      background: blue[300]
    },
    "::-webkit-scrollbar-thumb": {
      background: blue[600],
      '&:hover': {
        background: blue[800]
      }
    },
  },
  body: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    width: '100%',
  },
  a: {
    textDecoration: 'none'
  }
}

function App() {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <RouteApp />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
