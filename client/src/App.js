import { ChakraProvider, Box } from "@chakra-ui/react";
import { useState } from "react";
import myNewTheme from "./myNewTheme";
import Home from "./Home";
import BuyCoins from "./BuyCoins";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import "./AppStyle.css";

function App() {
	return (
		<ChakraProvider theme={myNewTheme}>
			<Router>
				<Box>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/buycoins">
							<BuyCoins />
						</Route>
					</Switch>
				</Box>
			</Router>
		</ChakraProvider>
	);
}

export default App;
