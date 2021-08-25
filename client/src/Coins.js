import React from "react";
import {
	Container,
	Box,
	HStack,
	Flex,
	Heading,
	Text,
	Spacer,
	Button,
	NumberInput,
	NumberInputField,
	FormControl,
	Select,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import {
	ResponsiveContainer,
	AreaChart,
	XAxis,
	YAxis,
	Area,
	Tooltip,
	CartesianGrid,
} from "recharts";

import { useState, useEffect } from "react";

import db from "./db.json";
import db100 from "./db100.json";
import NumberFormat from "react-number-format";
import { format, parseISO } from "date-fns";

const Coins = (props) => {
	let coins100 = db100.graphData100;
	// sets coin data
	const [Coins] = useState(coins100);

	// sets selected coin from dropdown
	const [selectedCoin, setSelectedCoin] = useState("Bitcoin-BTC-90");

	const [coinNumber, setCoinNumber] = useState(null);

	useEffect(() => {}, [coinNumber]);

	// Redux testing/figuring out area ******************************************************
	//

	//
	// **************************************************************************************

	const myCoin = Coins.find((item) => {
		return item.identifiertag === selectedCoin;
	});

	// map over coin data based on selected coin in drop down menu, returns all objects with matching value

	let filteredArray = db.graphData
		.filter((obj) => obj.identifiertag === selectedCoin)
		.map((obj) => obj);

	// iterates over array created by filteredArray and returns them in order of oldest to newest for accurate coin data on graph

	function newArray(filteredArray) {
		let newArray = [];
		let arrayLength = filteredArray.length;

		for (let i = 0; i <= arrayLength - 1; i++) {
			newArray.push({
				date: filteredArray[arrayLength - i - 1].dateCreated,
				price: filteredArray[arrayLength - i - 1].price_usd,
			});
		}
		return newArray.reverse();
	}

	// const that is overwritten on page change

	const currentCoinData = newArray(filteredArray);
	// tooltip styling for text price

	function CustomTooltip({ active, payload, label }) {
		if (active) {
			let payloadFormat = Number(payload[0].value).toLocaleString();

			return (
				<div className="tooltip">
					<h4>{format(parseISO(label), "eee, d MMM, yyyy")}</h4>
					<p>${payloadFormat} USD</p>
				</div>
			);
		}
		return null;
	}
	// Defining coin object for pushing to database if user buys
	var coinObjectToBuy = {
		cryptoSymbol: myCoin.symbol,
		USDValue: coinNumber,
		coinCount: coinNumber / myCoin.price_usd,
	};
	// console.log(coinObjectToBuy);

	//

	let coinAmountDecimalRendering = () => {
		if (myCoin.price_usd > 25000) {
			return (coinNumber / myCoin.price_usd).toFixed(9);
		} else {
			return (coinNumber / myCoin.price_usd).toFixed(5);
		}
	};

	return (
		<Box bg="offwhite" h="90vh">
			<Flex p="10em">
				<HStack>
					<Box h="500px" w="1000px">
						<ResponsiveContainer width="100%" height={400}>
							<AreaChart data={currentCoinData}>
								<defs>
									<linearGradient
										id="color"
										x1="0"
										y1="0"
										x2="0"
										y2="1"
									>
										<stop
											offset="0%"
											stopColor="rgb(152, 191, 100)"
											stopOpacity={0.8}
										></stop>
										<stop
											offset="75%"
											stopColor="rgb(152, 191, 100)"
											stopOpacity={0.2}
										></stop>
									</linearGradient>
								</defs>
								<Area
									dataKey="price"
									stroke="green"
									fill="url(#color)"
								/>
								<XAxis dataKey="date" />
								<YAxis
									dataKey="price"
									axisLine={false}
									tickCount="5"
									tickFormatter={(number) =>
										`$${number.toLocaleString()}`
									}
								/>
								<Tooltip content={<CustomTooltip />} />
								<CartesianGrid vertical={false} opacity={0.3} />
							</AreaChart>
						</ResponsiveContainer>
					</Box>
					<Container w="2xl" h="30em" alignSelf="flex-end">
						<Flex
							h="75%"
							flexDirection="column"
							color="black"
							justifyContent="space-around"
						>
							<Flex w="95%" justifyContent="normal">
								<Heading>
									{myCoin?.name || "no coin selected"}
								</Heading>
								<Spacer></Spacer>
								<Text
									fontSize="xl"
									fontWeight="bold"
									color="green.500"
								>
									{myCoin?.percent_change_24h || ""}
								</Text>
							</Flex>
							<Flex w="95%" justifyContent="normal">
								<Heading>Value</Heading>
								<Spacer></Spacer>
								<Heading>
									<NumberFormat
										value={
											Number(myCoin?.price_usd).toFixed(
												2
											) || ""
										}
										displayType={"text"}
										thousandSeparator={true}
										prefix={"$"}
									/>
								</Heading>
							</Flex>
							<Flex w="95%" justifyContent="normal">
								<Heading>Coin Rank</Heading>
								<Spacer></Spacer>
								<Heading>{myCoin?.rank || ""}</Heading>
							</Flex>
							<Flex w="95%" justifyContent="normal">
								<Heading>Market Cap</Heading>
								<Spacer></Spacer>
								<Heading>
									<NumberFormat
										value={myCoin?.market_cap_usd || ""}
										displayType={"text"}
										thousandSeparator={true}
										prefix={"$"}
									/>
								</Heading>
							</Flex>
							<HStack>
								<Select
									maxW="15em"
									placeholder="Select option"
									onChange={(e) =>
										setSelectedCoin(e.target.value)
									}
								>
									{Coins.map((coinList100, index) => {
										return (
											<option
												key={coinList100.symbol}
												value={
													coinList100.identifiertag
												}
											>
												{coinList100.name} (
												{coinList100.symbol})
											</option>
										);
									})}
								</Select>
								<FormControl id="amount" maxW="10em">
									<InputGroup>
										<InputLeftElement children="$" pr="5" />

										<NumberInput
											step={0.1}
											min={0}
											borderColor="secondary"
										>
											<NumberInputField
												placeholder="USD Amount"
												onChange={(event) =>
													setCoinNumber(
														event.target.value
													)
												}
											/>
										</NumberInput>
									</InputGroup>
								</FormControl>
								<Text fontWeight="bold">
									{coinAmountDecimalRendering()} Coins
								</Text>
							</HStack>
							<Button w="100%" borderRadius="20" bg="secondary">
								Buy
							</Button>
						</Flex>
					</Container>
				</HStack>
			</Flex>
		</Box>
	);
};

export default Coins;
