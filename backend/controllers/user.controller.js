import User from "../model/User.js";

import bcrypt from "bcryptjs";


// Create new user
export const createUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check missing fields
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required ❌" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered ❌" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      fullname,
      email,
      password: hashedPassword
    });
    
    await user.save();

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.status(201).json({
      message: "User created successfully ✅",
      user: userWithoutPassword
    });
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
};


// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
};


// Get a single user
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found ❌" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
};


// Update user details (not password)
export const updateUser = async (req, res) => {
  try {
    const { fullname, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { fullname, email },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found ❌" });
    }

    res.json({
      message: "User updated successfully ✅",
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
};


// Delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found ❌" });
    }

    res.json({ message: "User deleted successfully 🗑️" });
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
};
