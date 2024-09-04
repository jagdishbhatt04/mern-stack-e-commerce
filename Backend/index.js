import express from "express";
import mongoose from "mongoose";
import userRoutes from "./Router/userRouter.js";
import productRoutes from './Router/productRoutes.js'; 
import cookieParser from "cookie-parser";
import cors from "cors";

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

const corssOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus:200,
  Credentials:true
}

app.use(cors(corssOptions))

// Use cookie-parser middleware
app.use(cookieParser());

// Routes
app.use("/api/auth", userRoutes);
app.use('/', productRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});