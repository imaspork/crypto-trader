import mongoose from "mongoose";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
import cron from "node-cron";
import express from "express";
import fs from "fs";
import path from "path";

import { join, dirname } from "path";
import { Low, JSONFile, JSONFileSync } from "lowdb";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import { format, parseISO, subDays } from "date-fns";
import uuid4 from "uuid4";

//converting es5 imports to es6 is such a headache jsakdhasda

// reset json file for top 100
try {
	fs.unlinkSync("./client/src/db100.json");
} catch (err) {
	console.error(err);
}

fs.closeSync(fs.openSync("./client/src/db100.json", "w"));

let data100obj = { graphData100: [] };

fs.writeFileSync(
	"./client/src/db100.json",
	JSON.stringify(data100obj, null, 2),
	"utf-8"
);

//lowdb database code

const adapter = new JSONFileSync("./client/src/db.json");
const adapter100 = new JSONFileSync("./client/src/db100.json");
const db100 = new Low(adapter100);
const db = new Low(adapter);
await db100.read();
await db.read();
db100.data ||= { graphData100: [] };
db.data ||= { graphData: [] };

//mongodb database code

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
				identifiertag: `${array[i].name}-${array[i].symbol}-${array[i].id}`,
			});
			db.data.graphData.push({
				dateCreated: new Date().toISOString().substr(0, 10),
				price_usd: array[i].price_usd,
				rank: array[i].rank,
				symbol: array[i].symbol,
				name: array[i].name,
				id: array[i].id,
				identifiertag: `${array[i].name}-${array[i].symbol}-${array[i].id}`,
			});
			db.write();

			db100.data.graphData100.push({
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
				identifiertag: `${array[i].name}-${array[i].symbol}-${array[i].id}`,
			});
			db100.write();
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
			({
				name,
				symbol,
				rank,
				market_cap_usd,
				id,
				identifiertag,
				price_usd,
				nameid,
			}) => ({
				name,
				symbol,
				rank,
				market_cap_usd,
				id,
				identifiertag,
				price_usd,
				nameid,
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
