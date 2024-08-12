import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import App from './App';
import './index.css';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
