import { ChakraProvider, Box } from "@chakra-ui/react";
import myNewTheme from "./myNewTheme";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import "./AppStyle.css";
import AboutUs from "./AboutUs";
import Coins from "./Coins";
import Learn from "./Learn";
import Features from "./Features";
import LogIn from "./redux/logInPage/logInPage";
import GetCoin from "./redux/coinPage/GetCoin";

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
						<Route path="/aboutus">
							<AboutUs />
						</Route>
						<Route path="/learn">
							<Learn />
						</Route>
						<Route path="/features">
							<Features />
						</Route>
						<Route path="/signin">
							<LogIn />
						</Route>

						<Route path="/coins">
							<Coins />
						</Route>

						<Route path="/getcoin">
							<GetCoin />
						</Route>
					</Switch>
				</Box>
			</Router>
		</ChakraProvider>
	);
}

export default App;
