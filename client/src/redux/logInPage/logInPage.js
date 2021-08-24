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
import { googleProvider } from "../../service/authMethod";
import socialMediaAuth from "../../service/auth";
import { createSelector } from "reselect";
import { makeLogInPage } from "./selectors";
import { useSelector, useDispatch } from "react-redux";
import { setLogIn } from "./actions";
import { useHistory } from "react-router";

const stateSelector = createSelector(makeLogInPage, (login) => ({ login }));

const actionDispatch = (dispatch) => ({
	setLogIn: (login) => dispatch(setLogIn(login)),
});

export const LogIn = (props) => {
	// react router
	let history = useHistory();
	//
	const [userID, setUserID] = useState(null);
	const [userDisplayName, setUserDisplayName] = useState(null);

	// redux

	const { login } = useSelector(stateSelector);
	const { setLogIn } = actionDispatch(useDispatch());

	//  end redux

	const handleGoogleOnClick = async (provider) => {
		const res = await socialMediaAuth(provider);
		setUserID(res.uid);

		localStorage.setItem("userID", res.uid);
		localStorage.setItem("userDisplayName", res.displayName);

		setUserDisplayName(res.displayName);
		setLogIn({
			userID: res.uid,
			userDisplayName: res.displayName,
		});

		history.push("/coins");
	};

	console.log(
		`user ${login.userDisplayName} has logged in and their ID is ${login.userID}`
	);
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
