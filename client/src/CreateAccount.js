import React from "react";
import { Box, Container, Flex, Heading, HStack } from "@chakra-ui/layout";
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
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";
const CreateAccount = () => {
	return (
		<Box h="90vh" bg="primary">
			<Container left="300px" h="90vh" bg="secondary" position="absolute">
				<Flex justifyContent="center">
					<Heading> Create your account</Heading>
				</Flex>
				<Container>
					<FormControl p="3" id="email" isRequired>
						<FormLabel>Email address</FormLabel>
						<Input type="email" />
					</FormControl>
					<HStack>
						<FormControl p="3" id="username" isRequired>
							<FormLabel>Username</FormLabel>
							<Input type="user" />
						</FormControl>
						<FormControl p="3" id="username" isRequired>
							<FormLabel>Password</FormLabel>
							<Input type="password" />
						</FormControl>
					</HStack>
					<FormControl p="3" id="country">
						<FormLabel>Country of Residence</FormLabel>
						<Input type="country" />
					</FormControl>
					<FormControl p="3" id="state-province">
						<FormLabel>State/Province</FormLabel>
						<Input type="state-province" />
					</FormControl>
					<Container>
						<Flex p="3">
							<Spacer />
							<Button>Create Account</Button>
						</Flex>
						<Flex justifyContent="center">
							<Box borderRadius="10%" bg="white">
								<FcGoogle size="50" />
							</Box>
						</Flex>
					</Container>
				</Container>
			</Container>
		</Box>
	);
};

export default CreateAccount;
