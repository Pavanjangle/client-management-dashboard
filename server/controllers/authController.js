const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("../models/userModel");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const existing = users.find((user) => user.email === email);
  if (existing) return res.status(400).json({ msg: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), name, email, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ msg: "User registered successfully" });
};

const login = async (req, res) => {
  console.log("Login request received:", req.body);

  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // ✅ Send token and user data to frontend
  res.status(200).json({
    msg: "Login successful",
    token,
    user: { id: user.id, name: user.name, email: user.email },
  });
};


module.exports = { register, login };
