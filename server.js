const mongoose = require("mongoose");
const axios = require("axios");
const db = require("./config/keys").mongoURI;
const mongoURI = require("./config/keys");
const cron = require("node-cron");
const express = require("express");
const path = require("path");
var fs = require("fs");

const filePath = path.join(__dirname, "/data/crypto.JSON");

mongoose.connect(db, { useNewUrlParser: true }, function (err) {
	if (err) throw err;

	console.log("Successfully connected");
});

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
		expireAt: {
			type: Date,
			default: Date.now,
			index: { expires: "4320000" },
		},
	});

	const cryptos = mongoose.model("cryptos", cryptoSchema);

	function onSuccess(response) {
		let array = response.data.data;
		console.log(array);
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
	}
}

cron.schedule("1 0 * * *", () => {
	cryptoYeet();
	console.log("Crypto has been yeeted your majesty");
});

const app = express();
app.listen(8080, null);

cryptoYeet();
