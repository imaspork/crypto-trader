import React from "react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Center,
	Button,
	Spacer,
	VStack,
	Container,
	Flex,
	Heading,
	Box,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
	return (
		<Center h="90vh" bg="primary" color="black">
			<Container>
				<Flex justifyContent="center">
					<Heading> Sign In</Heading>
				</Flex>
				<Container>
					<VStack spacing={3}>
						<FormControl p="3" id="username">
							<FormLabel>Username</FormLabel>
							<Input type="user" />
						</FormControl>
						<FormControl p="3" id="username">
							<FormLabel>Password</FormLabel>
							<Input type="password" />
						</FormControl>
					</VStack>

					<Container>
						<Flex justifyContent="center">
							<VStack spacing={4}>
								<Button>Sign In</Button>
								<Box borderRadius="10%" bg="white">
									<FcGoogle size="50" />
								</Box>
							</VStack>
						</Flex>
					</Container>
				</Container>
			</Container>
		</Center>
	);
};

export default LogIn;
