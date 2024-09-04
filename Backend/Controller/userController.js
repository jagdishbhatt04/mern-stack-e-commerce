import User from "../Schema/userSchema.js";
import jwt from "jsonwebtoken";

// Create a new user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ user }, "jais@123", {
      expiresIn: "2m",
    });
    res.cookie("token", token);

    res
      .status(200)
      .json({ message: "Login Successfully", userInfo: user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const Profile = (req, res) => {  
  if (!req.jwtData) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({userProfile:{id:req.jwtData.user._id, name:req.jwtData.user.name, email:req.jwtData.user.email, role:req.jwtData.user.role}});
};

export { createUser, loginUser, getUsers, Profile };
