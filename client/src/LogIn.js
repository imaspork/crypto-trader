import React from "react";
import {
	FormControl,
	FormLabel,
	Input,
	Center,
	Button,
	VStack,
	Container,
	Flex,
	Heading,
	Box,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
	return (
		<Center h="90vh" bg="offwhite" color="black">
			<Container>
				<Flex justifyContent="center">
					<Heading> Sign In</Heading>
				</Flex>
				<Container>
					<VStack spacing={3}>
						<FormControl p="3" id="username">
							<FormLabel>Username</FormLabel>
							<Input type="user" borderColor="black" />
						</FormControl>
						<FormControl p="3" id="username">
							<FormLabel>Password</FormLabel>
							<Input type="password" borderColor="black" />
						</FormControl>
					</VStack>

					<Container>
						<Flex justifyContent="center">
							<VStack spacing={4}>
								<Button shadow="md" bg="secondary">
									Sign In
								</Button>
								<Box borderRadius="10%" shadow="md">
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
