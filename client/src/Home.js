import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import "./AppStyle.css";
import { BrowserRouter as Router } from "react-router-dom";
import SvgGraph from "./SVG";

const Home = () => {
	return (
		// Set calc for box height to be user viewport - 6em
		<Router>
			<Box h="90vh" bg="offwhite">
				<Flex
					h="100%"
					pl="8em"
					pr="8em"
					justifyContent="space-around"
					alignItems="center"
				>
					<Box>
						<SvgGraph width="35em" height="35em" />
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
					</Box>
				</Flex>
			</Box>
		</Router>
	);
};

export default Home;
