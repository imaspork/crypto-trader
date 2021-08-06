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
import SvgGraph from "./SVG";
import { useState, useEffect } from "react";
import CryptoData from "./data/crypto.json";
import CryptoList from "./data/Top100.json";
import NumberFormat from "react-number-format";

const Coins = () => {
	// sets coin data
	const [Coins] = useState(CryptoData);

	// sets selected coin from dropdown
	const [selectedCoin, setSelectedCoin] = useState(null);

	const myCoin = Coins.find((item) => {
		return item.name === selectedCoin;
	});

	return (
		<Box bg="offwhite" h="90vh">
			<Flex p="10em">
				<HStack>
					<Box>
						<SvgGraph width="900px" h="400px" />
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
								<Button
									w="8em"
									borderRadius="20"
									bg="secondary"
								>
									Buy
								</Button>
								<FormControl id="amount">
									<NumberInput
										step={0.1}
										min={0}
										borderColor="secondary"
									>
										<NumberInputField placeholder="amount" />
										<NumberInputStepper>
											<NumberIncrementStepper />
											<NumberDecrementStepper />
										</NumberInputStepper>
									</NumberInput>
								</FormControl>
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
							</HStack>
						</Flex>
					</Container>
				</HStack>
			</Flex>
		</Box>
	);
};

export default Coins;
