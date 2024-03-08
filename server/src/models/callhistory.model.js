const mongoose = require("mongoose");

const callHistorySchema = new mongoose.Schema(
	{
		initiator: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		recipient: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		type: {
			type: String,
			enum: ["audio", "video"],
		},
		duration: {
			type: Number,
		},
	},
	{ timestamps: true }
);

module.exports = {
	CallHistory: mongoose.model("CallHistory", callHistorySchema),
};
