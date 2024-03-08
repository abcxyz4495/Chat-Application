const mongoose = require("mongoose");
const { messageSchema } = require("./message.model");

const schema = mongoose.Schema(
	{
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				required: true,
			},
		],
		messages: [messageSchema],
		isGroupChat: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
		},
		admin: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},
	{ timestamps: true }
);

module.exports = { Conversation: mongoose.model("Conversation", schema) };
