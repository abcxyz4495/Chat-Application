import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import corsOptions from "../configs/corsOptions";

export const app = express();
export const server = createServer(app);
const io = new Server(server, {
	cors: corsOptions,
	pingTimeout: 10000,
});

io.on("connection", (socket) => {
	console.log(`A user connected with socket: ${socket.id}`);

	socket.emit("welcome", `Welcome from the server`);

	socket.on("disconnect", () => {
		console.log(`User disconnected: ${socket.id}`);
	});
});
