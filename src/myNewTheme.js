import { extendTheme } from "@chakra-ui/react";

const myNewTheme = extendTheme({
	colors: {
		primary: "#241F25",
		secondary: "#9B009E",
	},
	fonts: {
		heading: '"Montserrat", sans-serif',
		body: '"Montserrat", sans-serif',
		mono: '"Montserrat", sans-serif',
	},
});

export default myNewTheme;
