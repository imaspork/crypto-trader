import { ChakraProvider, Box } from "@chakra-ui/react";
import myNewTheme from "./myNewTheme";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Navbar from "./Navbar";
import "./AppStyle.css";
import AboutUs from "./AboutUs";
import Coins from "./Coins";
import Learn from "./Learn";
import Features from "./Features";
import LogIn from "./LogIn";

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
						<Route path="/signup">
							<CreateAccount />
						</Route>
						<Route path="/coins">
							<Coins />
						</Route>
					</Switch>
				</Box>
			</Router>
		</ChakraProvider>
	);
}

export default App;
