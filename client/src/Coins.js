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
import { useState } from "react";
import CryptoData from "./data/crypto.json";
import CryptoList from "./data/Top100.json";

const Coins = () => {
	const [Coins, useCoins] = useState(CryptoData);
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
							<Select placeholder="Select option">
								{CryptoList.map((coinList100, index) => {
									return (
										<option value={index}>
											{coinList100.name} (
											{coinList100.symbol})
										</option>
									);
								})}
							</Select>
							<Heading> Bitcoin Price (BTC)</Heading>
							<Flex w="95%" justifyContent="normal">
								<Heading>{}</Heading>
								<Spacer></Spacer>
								<Text
									fontSize="xl"
									fontWeight="bold"
									color="green.500"
								>
									+13.01%
								</Text>
							</Flex>
							<Flex w="95%" justifyContent="normal">
								<Heading>1M HIGH</Heading>
								<Spacer></Spacer>
								<Heading>$40,919.10</Heading>
							</Flex>
							<Flex w="95%" justifyContent="normal">
								<Heading>1M LOW</Heading>
								<Spacer></Spacer>
								<Heading>$29,288.60</Heading>
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
							</HStack>
						</Flex>
					</Container>
				</HStack>
			</Flex>
		</Box>
	);
};

export default Coins;
