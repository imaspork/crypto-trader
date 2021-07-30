const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating schema

const ItemSchema = new Schema({
	id: {
		type: Number,
		required: false,
	},
	symbol: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	nameid: {
		type: String,
		required: true,
	},
	rank: {
		type: Number,
		required: true,
	},
	price_usd: {
		type: Number,
		required: true,
	},
	percent_change_24h: {
		type: Number,
		required: true,
	},
	market_cap_usd: {
		type: Number,
		required: true,
	},
	volume24: {
		type: Number,
		required: false,
	},

	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Item = mongoose.model("item", ItemSchema);
