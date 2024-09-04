// server.js
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./Router/userRouter.js";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://jagdish22:jagdish@cluster1.s0fhz.mongodb.net/E-commerce?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use cookie-parser middleware
app.use(cookieParser());

// Routes
app.use("/api/auth", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
