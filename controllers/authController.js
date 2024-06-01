const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = user.generateToken();
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Implement other authentication controller functions

module.exports = {
  registerUser,
  loginUser,
  // Export other authentication controller functions
};
