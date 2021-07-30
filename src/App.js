import "./App.css";
import {
	ChakraProvider,
	Button,
	Container,
	Flex,
	Box,
	Spacer,
	Text,
	Heading,
	Link,
	VStack,
} from "@chakra-ui/react";
import myNewTheme from "./myNewTheme";
import DisplayData from "./DisplayData";

function App() {
	return (
		<ChakraProvider theme={myNewTheme}>
			<Box bg="primary">
				<Flex h="100vh" bg="primary">
					<Box h="6em" w="100%" bg="secondary">
						<Flex h="100%" align="center" p="5">
							<Heading size="2xl" pr="10">
								CryptoTrader
							</Heading>
							<Link fontWeight="bold" p="3">
								Features
							</Link>
							<Link fontWeight="bold" p="3">
								Learn
							</Link>
							<Link fontWeight="bold" p="3">
								About us
							</Link>
							<Spacer></Spacer>
							<Button
								borderRadius="25px"
								bg="secondary"
								borderWidth="2px"
								borderColor="primary"
							>
								Sign In
							</Button>
							<Button
								borderRadius="25px"
								bg="secondary"
								borderWidth="2px"
								borderColor="primary"
							>
								Create Account
							</Button>
						</Flex>
					</Box>
				</Flex>
				<DisplayData />
			</Box>
		</ChakraProvider>
	);
}

export default App;
