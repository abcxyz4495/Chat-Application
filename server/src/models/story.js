const mongoose = require("mongoose");

const storySchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		content: { type: String },
		mediaType: { type: String, enum: ["text", "image", "video"] },
		mediaUrl: { type: String },
		// mediaData: { type: mongoose.Schema.Types.ObjectId, ref: GridFsSchema },
		caption: { type: String },
		createdAt: { type: Date, default: Date.now },
		expiryAt: { type: Date, default: () => Date.now() + 24 * 60 * 60 * 1000 },
		isViewedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
		replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "StatusReply" }],
		// mentions: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Mentioned users (optional)
	},
	{ timestamps: true }
);

const gridFsSchema = new mongoose.Schema({
	contentType: { type: String, required: true },
	filename: { type: String, required: true },
	length: { type: Number, required: true },
	chunkSize: { type: Number, required: true },
	uploadDate: { type: Date, default: Date.now },
	metadata: { type: Object },
});

module.exports = {
	Status: mongoose.model("Story", storySchema),
	GridFsSchema: gridFsSchema,
};
