const express = require("express");
const router = express.Router();

// item model

const Item = require("../../models/Item");

// @route get api/items
// @desc get all items
// @access public
router.get("/", (req, res) => {
	Item.find()
		.sort({ date: -1 })
		.then((items) => res.json(items));
});

// @route POST api/items
// @desc create a post
// @access public
router.post("/", (req, res) => {
	const newItem = new Item({
		name: req.body.name,
		symbol: req.body.symbol,
		nameid: req.body.nameid,
		rank: req.body.rank,
		price_usd: req.body.price_usd,
		percent_change_24h: req.body.percent_change_24h,
		market_cap_usd: req.body.market_cap_usd,
		volume24: req.body.volume24,
	});

	newItem.save().then((item) => res.json(item));
});

// @route DELETE api/items
// @desc DEKETE a items
// @access public
router.delete("/:id", (req, res) => {
	Item.findById(req.params.id)
		.then((item) => item.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
