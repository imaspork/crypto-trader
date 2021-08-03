import React from "react";
import {
	Box,
	Text,
	Heading,
	Container,
	HStack,
	Stack,
	Flex,
} from "@chakra-ui/react";
import "./AppStyle.css";
import SvgGraph from "./SVG";
import SignUpCreateAccount from "./SignUpCreateAccount";
import SignUp from "./SignUp";

const Home = () => {
	return (
		// Set calc for box height to be user viewport - 6em
		<Box h="90vh" bg="primary">
			<Flex
				h="100%"
				pl="8em"
				pr="8em"
				justifyContent="space-around"
				alignItems="center"
			>
				<Box>
					<SvgGraph width="35em" height="35em" fill="#9b009e" />
				</Box>
				<Box>
					<Heading
						pb="5"
						color="black"
						fontSize="7xl"
						fontWeight="extrabold"
					>
						<Text>Simulate</Text>
						<Text>Buying</Text>
						<Text>& Selling</Text>
						<Text>Cryptocurrencies</Text>
					</Heading>
					<Text fontSize="3xl" fontWeight="bold" color="black">
						<Text>
							<span className="secondary-color">Sign up</span>{" "}
							today
						</Text>{" "}
						<Text>
							and buy from{" "}
							<span className="secondary-color">100</span>{" "}
							different
						</Text>{" "}
						cryptocurrencies{" "}
						<span className="secondary-color">instantly.</span>
					</Text>
					<Box pt="5">
						<SignUp />
					</Box>
				</Box>
			</Flex>
		</Box>
	);
};

export default Home;
