import express from "express";
import mongoose from "mongoose";
import { User } from "../../models/User.js";
const router = express.Router();

// User Model

// @route GET user
// @desc get ALL items
// @access Public
// GET CURRENT USER DATA IN DB

router.get("/:uid", (req, res, next) => {
	console.log(req.params.uid);
	User.findOne({ uid: req.params.uid })
		.then((result) => {
			res.status(200).json({
				result,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
});

// @route POST api/users
// @desc Create an item
// @access Public
// CHECK IF USER EXISTS, IF DOESNT EXIST => CREATE NEW USER || IF DOES EXIST =>

router.post("/new/:uid", (req, res, next) => {
	User.findOne({ uid: req.params.uid }, function (err, user) {
		if (err) {
			console.log("MongoDB Error:", err);
			return false;
		} // RETURNS ERROR
		if (!user) {
			// CREATES USER AND SENDS IN RESPONSE
			const newUser = new User({
				uid: req.body.uid,
				userDisplayName: req.body.userDisplayName,
				date: req.body.date,
				firstLogIn: req.body.firstLogIn,
				USD: req.body.USD,
			});
			newUser.save().then((user) => res.json(user));
			console.log("New user created!");
		}

		if (user) {
			// CREATES USER AND SENDS IN RESPONSE

			console.log("Old user detected");
			console.log(user);
			res.json(user);
		}

		//  else {
		// 	(response) => {
		// 		res.status(200).json({
		// 			response,
		// 		});
		// 	};
		// }
	});
});

// @route exists

// @route DELETE api/users/:id
// @desc Delete a user
// @access Public

router.delete("/:uid", (req, res) => {
	User.findById(req.params.id)
		.then((user) => user.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

export default router;
