import mongoose from "mongoose";

const Schema = mongoose.Schema;

// create Schema

const UserSchema = new Schema({
	uid: {
		type: String,
		required: true,
	},
	userDisplayName: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	firstLogIn: {
		type: Boolean,
		required: true,
	},
	USD: {
		type: Number,
		required: true,
	},
	cryptoHeld: [{ cryptoIdentifierTag: String, cryptoAmount: Number }],
});

const User = mongoose.model("User", UserSchema);

export { User };
