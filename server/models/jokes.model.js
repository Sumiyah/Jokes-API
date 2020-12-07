console.log("in models")
const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	setup: {
		type: String,
		minlength: [10, "Joke must be at least 10 characters :)!"]
	},
	punchline: {
		type:String,
		minlength: [3, "punchline must be at least 3 characters long D:!!"]
	}
});

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;