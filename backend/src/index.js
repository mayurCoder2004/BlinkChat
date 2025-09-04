import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";
const __dirname = path.resolve();

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// simple health/root endpoint
app.get('/', (req, res) => {
  res.status(200).send('BlinkChat backend is running');
});

if (process.env.NODE_ENV === "production") {
  const frontDist = path.join(__dirname, "../../frontend/dist");
  console.log("Serving frontend from:", frontDist);

  // serve static files if built
  app.use(express.static(frontDist));

  // fallback to index.html for client-side routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontDist, "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
