const mongoose = require("mongoose");

const schema = mongoose.Schema(
	{
		status: {
			type: String,
			default: "pending",
			enum: ["pending", "accepted", "rejected"],
		},
		sender: {
			type: Types.ObjectId,
			ref: "User",
			required: true,
		},
		receiver: {
			type: Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = { Request: mongoose.model("Request", schema) };
