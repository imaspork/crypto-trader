import mongoose from "mongoose";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
import cron from "node-cron";
import express from "express";
import fs from "fs";
import path from "path";

import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

//converting es5 imports to es6 is such a headache jsakdhasda

mongoose.connect(
	process.env.mongoURI,
	{ useNewUrlParser: true },
	function (err) {
		if (err) throw err;

		console.log("Successfully connected");
	}
);

let filePath = "./client/src/data/crypto.json";
// api fetch

function cryptoYeet() {
	axios
		.get("https://api.coinlore.net/api/tickers/?start=0&limit=100")
		.then(function (response) {
			onSuccess(response);
		})
		.catch(function (error) {
			console.log(error);
		});

	let cryptoSchema = mongoose.Schema({
		id: Number,
		symbol: String,
		name: String,
		nameid: String,
		rank: Number,
		price_usd: Number,
		percent_change_24h: Number,
		percent_change_1h: Number,
		market_cap_usd: Number,
		volume24: Number,
		csupply: Number,
		time: Number,
		createdAt: { type: Date, expires: "262800m", default: Date.now },
	});

	cryptoSchema.index({ expireAfterSeconds: 15768000 });

	const cryptos = mongoose.model("cryptos", cryptoSchema);

	function onSuccess(response) {
		let array = response.data.data;

		const writeCrypto = fs.createWriteStream(filePath);
		writeCrypto.write("[");
		for (let i = 0; i < array.length; i++) {
			let newCrypto = new cryptos({
				id: array[i].id,
				symbol: array[i].symbol,
				name: array[i].name,
				nameid: array[i].nameid,
				rank: array[i].rank,
				price_usd: array[i].price_usd,
				percent_change_24h: array[i].percent_change_24h,
				market_cap_usd: array[i].market_cap_usd,
				volume24: array[i].volume24,
				csupply: array[i].csupply,
				time: array[i].time,
			});
			writeCrypto.write(JSON.stringify(array[i]) + ",");
			newCrypto.save(function (err, result) {
				if (err) {
					console.log(err);
				} else {
					console.log(result);
				}
			});
		}
		writeCrypto.write("]");
		writeCrypto.close();
		const nameArray = array.map(
			({ name, symbol, rank, market_cap_usd }) => ({
				name,
				symbol,
				rank,
				market_cap_usd,
			})
		);

		// sort top 100 coins
		nameArray.sort((a, b) =>
			a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0
		);
		fs.writeFileSync(
			"client/src/data/Top100.json",
			JSON.stringify(nameArray)
		);

		console.log(nameArray);

		// getting top 100 coins
	}
}

cron.schedule("1 0 * * *", () => {
	cryptoYeet();
	console.log("Crypto has been yeeted your majesty");
});

const app = express();
app.listen(8080, null);

cryptoYeet();
