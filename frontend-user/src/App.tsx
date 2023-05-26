import { ChakraProvider } from '@chakra-ui/react';
import { LoginPage } from './pages/Login';
import { theme } from './theme/theme';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<LoginPage />
		</ChakraProvider>
	);
}

export default App;
