import User from "../Schema/userSchema.js";

// Create a new user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send(user);
  } catch (err) {
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

    const token = jwt.sign({ id: user._id, email: user.email }, "jais@123", {expiresIn: "1h"});
    res.cookie("token", token);

    res.status(200).json({ message:"Login Successfully", userInfo: user, token });
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
  res.json(req.user);
};

export { createUser, loginUser, getUsers, Profile };
