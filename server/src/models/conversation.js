const mongoose = require("mongoose");
const { messageSchema } = require("./message");

const schema = mongoose.Schema({
	participants: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	],
	messages: [messageSchema],
	isGroupChat: { type: Boolean, default: false },
	name: { type: String },
	admin: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	createdAt: { type: Date, default: Date.now, immutable: true },
	updatedAt: { type: Date, default: Date.now },
});

module.exports = { Conversation: mongoose.model("Conversation", schema) };
