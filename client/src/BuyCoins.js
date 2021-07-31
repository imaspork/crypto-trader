import React from "react";
import NumberConvert from "./NumberConvert";
import { useState, useEffect } from "react";
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	VStack,
	HStack,
} from "@chakra-ui/react";

const BuyCoins = () => {
	const [coin, useCoin] = useState("Bitcoin");
	const bitcoinCost = 30000;

	const [coinCount, setCoinCount] = useState("");

	// const onChangeHandler = (event) => {
	// 	setCoinCount(event.target.value);
	// };
	return (
		<Box h="10em" bg="secondary">
			<Flex>
				<VStack align="left">
					<b>Buy {coin}</b>
					<Box>
						{coin} Value: ${NumberConvert(bitcoinCost)}
					</Box>
					<FormControl>
						<HStack>
							<NumberInput
								step={0.01}
								w="15em"
								max={99999999.0}
								min={0.0}
								onChange={(valueString) =>
									setCoinCount(valueString)
								}
								value={coinCount}
							>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
							<Box>
								Total Cost: $
								{NumberConvert(bitcoinCost * coinCount)}{" "}
							</Box>
						</HStack>
					</FormControl>
				</VStack>
			</Flex>
		</Box>
	);
};

export default BuyCoins;
