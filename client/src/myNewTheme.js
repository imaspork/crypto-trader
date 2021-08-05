import { extendTheme } from "@chakra-ui/react";

const myNewTheme = extendTheme({
	colors: {
		primary: "#241F25",
		secondary: "rgb(152, 191, 100)",
		black: "#000000",
		offwhite: "#F1F1F1",
	},
	fonts: {
		heading: '"Montserrat", sans-serif',
		body: '"Montserrat", sans-serif',
		mono: '"Montserrat", sans-serif',
	},
});

export default myNewTheme;
