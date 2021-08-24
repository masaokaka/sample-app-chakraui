import React from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react';
import './App.css';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>
  );
}

export default App;
