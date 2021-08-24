import express from "express";
import { User } from "../../models/User.js";
const router = express.Router();

// User Model

// @route GET api/users
// @desc get ALL items
// @access Public

router.get("/", (req, res) => {
	User.find()
		.sort({ date: -1 })
		.then((users) => res.json(users));
});

// @route POST api/users
// @desc Create an item
// @access Public

router.post("/", (req, res) => {
	const newUser = new User({
		userDisplayName: req.body.userDisplayName,
	});

	newUser.save().then((user) => res.json(user));
});

// @route DELETE api/users/:id
// @desc Delete a user
// @access Public

router.delete("/:id", (req, res) => {
	User.findById(req.params.id)
		.then((user) => user.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

export default router;
