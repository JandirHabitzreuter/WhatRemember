import { Button, ChakraProvider } from '@chakra-ui/react';
import Hello from './pages/Hello';

function App() {
  return (
    <ChakraProvider>
      <Hello />
    </ChakraProvider>
  );
}

export default App;
