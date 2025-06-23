import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

// In-memory user tracking object
const onlineUsers = {};

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://192.168.0.34:5173"],
    credentials: true,
  },
});
export const getReceiverSocketId = (receiverId) => {
  return onlineUsers[receiverId];
};



io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId) {
    onlineUsers[userId] = socket.id;
    console.log(`✅ User connected: ${userId} (socket ID: ${socket.id})`);
  }

  // Send updated list of online user IDs to everyone
  io.emit("getOnlineUsers", Object.keys(onlineUsers));

  socket.on("disconnect", () => {
    if (userId) {
      console.log(`❌ User disconnected: ${userId} (socket ID: ${socket.id})`);
      delete onlineUsers[userId];

      // Broadcast updated online users list
      io.emit("getOnlineUsers", Object.keys(onlineUsers));
    }
  });
});

export { app, io, server };
