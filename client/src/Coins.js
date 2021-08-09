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

import Data from "./data/testData.json";
import { useState, useEffect } from "react";
import CryptoData from "./data/crypto.json";
import CryptoList from "./data/Top100.json";
import NumberFormat from "react-number-format";
import { format, parseISO, subDays } from "date-fns";

const Coins = () => {
	// sets coin data
	const [Coins] = useState(CryptoData);

	// sets selected coin from dropdown
	const [selectedCoin, setSelectedCoin] = useState(null);

	const [coinNumber, setCoinNumber] = useState(null);

	useEffect(() => {}, [coinNumber]);

	const myCoin = Coins.find((item) => {
		return item.name === selectedCoin;
	});

	let data = [
		{
			date: Data[1][0].createdAt.substr(0, 10),
			price: Data[1][0].price_usd,
		},
		{
			date: Data[1][1].createdAt.substr(0, 10),
			price: Data[1][1].price_usd,
		},
		{
			date: Data[1][2].createdAt.substr(0, 10),
			price: Data[1][2].price_usd,
		},
		{
			date: Data[1][3].createdAt.substr(0, 10),
			price: Data[1][3].price_usd,
		},
		{
			date: Data[1][4].createdAt.substr(0, 10),
			price: Data[1][4].price_usd,
		},
		{
			date: Data[1][5].createdAt.substr(0, 10),
			price: Data[1][5].price_usd,
		},
		{
			date: Data[1][6].createdAt.substr(0, 10),
			price: Data[1][6].price_usd,
		},
		{
			date: Data[1][7].createdAt.substr(0, 10),
			price: Data[1][7].price_usd,
		},
		{
			date: Data[1][8].createdAt.substr(0, 10),
			price: Data[1][8].price_usd,
		},
		{
			date: Data[1][9].createdAt.substr(0, 10),
			price: Data[1][9].price_usd,
		},
	];

	function CustomTooltip({ active, payload, label }) {
		if (active) {
			return (
				<div className="tooltip">
					<h4>{format(parseISO(label), "eee, d MMM, yyyy")}</h4>
					<p>${parseInt(payload[0].value).toLocaleString()} USD</p>
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
						<Flex width="3xl">
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
									<CartesianGrid
										vertical={false}
										opacity={0.3}
									/>
								</AreaChart>
							</ResponsiveContainer>
						</Flex>
					</Box>
					<Container w="xl" h="30em" alignSelf="flex-end">
						<Flex
							h="75%"
							flexDirection="column"
							color="black"
							justifyContent="space-around"
						>
							<Heading> </Heading>
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
										value={myCoin?.price_usd || ""}
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
									{CryptoList.map((coinList100, index) => {
										return (
											<option
												key={coinList100.rank}
												value={coinList100.name}
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
