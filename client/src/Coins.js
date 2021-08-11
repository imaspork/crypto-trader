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
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	FormControl,
	Select,
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
import { format, parseISO, subDays } from "date-fns";

const Coins = () => {
	let coins100 = db100.graphData100;
	// sets coin data
	const [Coins] = useState(coins100);

	// sets selected coin from dropdown
	const [selectedCoin, setSelectedCoin] = useState("Bitcoin-BTC-90");

	const [coinNumber, setCoinNumber] = useState(null);

	useEffect(() => {}, [coinNumber]);

	const myCoin = Coins.find((item) => {
		return item.identifiertag === selectedCoin;
	});

	let filteredArray = db.graphData
		.filter((obj) => obj.identifiertag === selectedCoin)
		.map((obj) => obj);

	console.log(myCoin.price_usd);

	// CURRENTLY GRABS FIRST 8 ITEMS - switch to filtering by last 10 indexes
	let data = [
		{
			date: filteredArray[0].dateCreated,
			price: filteredArray[0].price_usd,
		},
		{
			date: filteredArray[1].dateCreated,
			price: filteredArray[1].price_usd,
		},
		{
			date: filteredArray[2].dateCreated,
			price: filteredArray[2].price_usd,
		},
		{
			date: filteredArray[3].dateCreated,
			price: filteredArray[3].price_usd,
		},
		{
			date: filteredArray[4].dateCreated,
			price: filteredArray[4].price_usd,
		},
		{
			date: filteredArray[5].dateCreated,
			price: filteredArray[5].price_usd,
		},
		{
			date: filteredArray[6].dateCreated,
			price: filteredArray[6].price_usd,
		},
		{
			date: filteredArray[7].dateCreated,
			price: filteredArray[7].price_usd,
		},
	];

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

	return (
		<Box bg="offwhite" h="90vh">
			<Flex p="10em">
				<HStack>
					<Box h="500px" w="1000px">
						<ResponsiveContainer width="100%" height={400}>
							<AreaChart data={data}>
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
						;
					</Box>
					<Container w="xl" h="30em" alignSelf="flex-end">
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
								<FormControl id="amount">
									<NumberInput
										step={0.1}
										min={0}
										borderColor="secondary"
									>
										<NumberInputField
											placeholder="amount"
											onChange={(event) =>
												setCoinNumber(
													event.target.value
												)
											}
										/>
										<NumberInputStepper>
											<NumberIncrementStepper />
											<NumberDecrementStepper />
										</NumberInputStepper>
									</NumberInput>
								</FormControl>
								<Button
									w="8em"
									borderRadius="20"
									bg="secondary"
								>
									Buy
								</Button>
							</HStack>
						</Flex>
					</Container>
				</HStack>
			</Flex>
		</Box>
	);
};

export default Coins;
