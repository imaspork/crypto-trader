const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

// Bodyparser

app.use(bodyParser.json());

// Database config

const db = require("./config/keys").mongoURI;

// mongo connection

mongoose
	.connect(db)
	.then(() => {
		console.log("Mongo Database Connected");
	})
	.catch((err) => console.log(err));

// use routes

app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
