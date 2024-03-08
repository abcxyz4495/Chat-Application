const mongoose = require("mongoose");

const schema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String,
			default: "user.png",
		},
		about: {
			type: String,
			default: "Busy",
		},
		status: {
			type: String,
			default: "Unavailable",
		},
		refreshToken: {
			type: String,
		},
		connections: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		conversations: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Conversation",
			},
		],
		stories: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Story",
			},
		],
		callHistory: [
			{
				type: mongoose.Schema.Types.Mixed,
			},
		],
	},
	{ timestamps: true }
);

module.exports = { User: mongoose.model("User", schema) };
