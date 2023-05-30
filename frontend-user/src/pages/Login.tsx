import { Button, Flex, HStack, Input, Link, Text, VStack } from '@chakra-ui/react';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import { colors } from '../theme/theme';

export function LoginPage() {
	return (
		<Flex w="full" h="100vh" alignItems="center" justifyContent="center" bgColor="background">
			<VStack width='350px' height='330px' bgColor="#FFF" borderRadius={8} padding={6} justifyContent='space-between' boxShadow='0px 0px 20px 0px rgba(0,0,0,0.1);'>
				<VStack w='full' spacing={4}>
					<Input placeholder="Email" />
					<Input placeholder="Password" type="password" />
				</VStack>
				<HStack>
					<FaFacebook size={28} color={colors.primary[600]} />
					<FaGoogle size={28} color={colors.secondary[600]} />
					<FaApple size={28}/>
				</HStack>
				<VStack w='full'>
					<Button w='full'>Login</Button>
					<Text fontSize='14px'>Don't have an account? <Link color='primary.500' fontWeight='bold'>create one</Link></Text>
					<Link fontSize='12px'>Forgot your password?</Link>
				</VStack>
			</VStack>
		</Flex>
	);
}
