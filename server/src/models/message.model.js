const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		sender: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		recipient: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		readBy: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		edited: {
			type: Boolean,
			default: false,
		},
		editedAt: {
			type: Date,
		},
		mediaType: {
			type: String,
			enum: ["text", "file", "image", "video", "audio"],
		},
		mediaUrl: {
			type: String,
		},
		// mediaData: { type: mongoose.Schema.Types.ObjectId, ref: GridFsSchema },
	},
	{ timestamps: true }
);

module.exports = {
	messageSchema,
	Message: mongoose.model("Message", messageSchema),
};
