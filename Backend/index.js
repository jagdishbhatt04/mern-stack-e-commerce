// server.js
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./Router/userRouter.js";

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://jagdish22:jagdish22@@cluster1.s0fhz.mongodb.net/E-commerce?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
