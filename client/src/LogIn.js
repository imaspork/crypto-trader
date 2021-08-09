import React from "react";
import { useState } from "react";
import {
	Center,
	VStack,
	Container,
	Flex,
	Heading,
	Link,
	Spacer,
	Text,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { googleProvider } from "./service/authMethod";
import socialMediaAuth from "./service/auth";

const LogIn = () => {
	const [userID, setUserID] = useState(null);
	const [userDisplayName, setUserDisplayName] = useState(null);

	const handleGoogleOnClick = async (provider) => {
		const res = await socialMediaAuth(provider);
		setUserID(res.uid);
		console.log(userID);
		console.log(userDisplayName);
		localStorage.setItem("userID", res.uid);
		localStorage.setItem("displayName", res.displayName);

		setUserDisplayName(res.displayName);
	};
	return (
		<Center h="90vh" bg="offwhite" color="black">
			<VStack spacing={10}>
				<Flex justifyContent="center">
					<Heading> Sign In</Heading>
				</Flex>
				<Container>
					<Flex justifyContent="center">
						<Link>
							<Flex
								alignItems="center"
								w="20em"
								boxShadow="md"
								p="2"
								borderRadius="5"
							>
								<FcGoogle size="50" />
								<Spacer></Spacer>
								<Text
									fontWeight="normal"
									onClick={() =>
										handleGoogleOnClick(googleProvider)
									}
								>
									Sign in with Google
								</Text>
								<Spacer></Spacer>
							</Flex>
						</Link>
					</Flex>
				</Container>
			</VStack>
		</Center>
	);
};

export default LogIn;
