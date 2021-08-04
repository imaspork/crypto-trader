import React from "react";
import { Flex, Box, Spacer, Heading, Text, HStack } from "@chakra-ui/react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<Flex bg="primary">
			<Box h="6em" w="100%" bg="secondary">
				<Flex h="100%" align="center" p="5">
					<Link to="/">
						<Heading size="2xl" pr="10">
							CryptoTrader
						</Heading>
					</Link>

					<Link to="/aboutus">
						<Text fontWeight="bold" p="3">
							About us
						</Text>
					</Link>
					<Link to="/learn">
						<Text fontWeight="bold" p="3">
							Learn
						</Text>
					</Link>
					<Link to="/features">
						<Text fontWeight="bold" p="3">
							Features
						</Text>
					</Link>

					<Link to="/coins">
						<Text fontWeight="bold" p="3">
							Coins
						</Text>
					</Link>
					<Spacer></Spacer>

					<HStack>
						<Link to="/signin">
							<SignIn />
						</Link>
						<Link to="signup">
							<SignUp />
						</Link>
					</HStack>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Navbar;
