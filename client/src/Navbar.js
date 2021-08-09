import React from "react";
import { Flex, Box, Spacer, Heading, Text, HStack } from "@chakra-ui/react";
import SignIn from "./SignIn";
import SvgLogo from "./SvgLogo";

import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<Flex bg="primary">
			<Box h="6em" w="100%" bg="white">
				<Flex h="100%" p="5" alignItems="center">
					<Link to="/">
						<Flex alignItems="center">
							<SvgLogo width="80" height="80" />
							<Heading size="xl" fontWeight="normal" pl="5">
								CryptoTrader
							</Heading>
						</Flex>
					</Link>

					<Link to="/aboutus">
						<Text fontWeight="bold" p="5">
							About us
						</Text>
					</Link>
					<Link to="/learn">
						<Text fontWeight="bold" p="5">
							Learn
						</Text>
					</Link>
					<Link to="/features">
						<Text fontWeight="bold" p="5">
							Features
						</Text>
					</Link>

					<Link to="/coins">
						<Text fontWeight="bold" p="5">
							Coins
						</Text>
					</Link>
					<Spacer></Spacer>
					<HStack>
						<Link to="/signin">
							<SignIn />
						</Link>
					</HStack>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Navbar;
