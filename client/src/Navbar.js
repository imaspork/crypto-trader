import React from "react";
import {
	Flex,
	Box,
	Spacer,
	Heading,
	Text,
	HStack,
	Button,
} from "@chakra-ui/react";
import SignIn from "./SignIn";
import SvgLogo from "./SvgLogo";
import { Link } from "react-router-dom";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { makeLogInPage } from "./redux/logInPage/selectors";
import { useDispatch } from "react-redux";
import { setLogIn } from "./redux/logInPage/actions";

const stateSelector = createSelector(makeLogInPage, (login) => ({ login }));

const actionDispatch = (dispatch) => ({
	setLogIn: (login) => dispatch(setLogIn(login)),
});

const Navbar = (props) => {
	const { login } = useSelector(stateSelector);
	const { setLogIn } = actionDispatch(useDispatch());

	const [userInfo, setUserInfo] = useState([]);

	useEffect(() => {
		let userID = localStorage.getItem("userID");
		let userDisplayName = localStorage.getItem("userDisplayName");
		if (userID === null) {
			console.log("no userid");
		} else {
			setUserInfo({
				userID: userID,
				userDisplayName: userDisplayName,
			});
			setLogIn({
				userID: userID,
				userDisplayName: userDisplayName,
			});
		}
	}, []);
	console.log(userInfo);
	console.log("redux ver", login);
	// redux

	// end redux

	let userID = localStorage.getItem("userID");
	let userDisplayName = localStorage.getItem("userDisplayName");

	let logOutFunction = () => {
		setLogIn({});
		localStorage.clear();
	};

	return (
		<Flex bg="primary">
			<Box h="6em" w="100%" bg="white">
				<Flex h="100%" p="5" alignItems="center">
					<Link to="/">
						<Flex alignItems="center">
							<SvgLogo width="80" height="80" />
							<Heading size="xl" fontWeight="normal" pl="5">
								CryptoTrader
							</Heading>
						</Flex>
					</Link>

					<Link to="/aboutus">
						<Text fontWeight="bold" p="5">
							About us
						</Text>
					</Link>
					<Link to="/learn">
						<Text fontWeight="bold" p="5">
							Learn
						</Text>
					</Link>
					<Link to="/features">
						<Text fontWeight="bold" p="5">
							Features
						</Text>
					</Link>

					<Link to="/coins">
						<Text fontWeight="bold" p="5">
							Coins
						</Text>
					</Link>
					<Spacer></Spacer>
					<HStack>
						{!login.userID ? (
							<Link to="/signin">
								<SignIn />
							</Link>
						) : (
							<>
								<Text>{login.userDisplayName}</Text>
								<Link to="/">
									<Button
										borderRadius="5px"
										bg="secondary"
										type="submit"
										onClick={() => logOutFunction()}
									>
										Sign Out
									</Button>
								</Link>
							</>
						)}
					</HStack>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Navbar;
