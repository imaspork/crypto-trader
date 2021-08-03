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
import { useState } from "react";
import myNewTheme from "./myNewTheme";
import DisplayData from "./DisplayData";
import SignUpCreateAccount from "./SignUpCreateAccount";
import NumberConvert from "./NumberConvert";
import BuyCoins from "./BuyCoins";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	const [user, setUser] = useState("");
	const [usdBal, setUsdBal] = useState(98630);

	return (
		<ChakraProvider theme={myNewTheme}>
			<Router>
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
								<Link fontWeight="bold" p="3">
									Buy Coin
								</Link>
								<Spacer></Spacer>

								<Box>
									<SignUpCreateAccount />
								</Box>
							</Flex>
						</Box>
					</Flex>
					<BuyCoins />
				</Box>
			</Router>
		</ChakraProvider>
	);
}

export default App;
