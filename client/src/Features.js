import React from "react";
import { Heading, Center } from "@chakra-ui/react";
import SvgLogo from "./SvgLogo";

const Features = () => {
	return (
		<Center h="90vh" bg="offwhite">
			<Heading fontSize="6xl" color="black" pr="10">
				Features Coming Soon
			</Heading>
			<SvgLogo />
		</Center>
	);
};

export default Features;
