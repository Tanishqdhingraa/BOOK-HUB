import User from "../models/User.js";




// Create new user
export const createUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists ❌" });
    }

    const user = new User({ fullname, email, password });
    await user.save();

    res.status(201).json({
      message: "User created successfully ✅",
      user
    });
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // hide password
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
};

// Get single user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found ❌" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const { fullname, email } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { fullname, email },
      { new: true, runValidators: true }
    ).select("-password");

    if (!user) return res.status(404).json({ message: "User not found ❌" });

    res.json({ message: "User updated successfully ✅", user });
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found ❌" });

    res.json({ message: "User deleted successfully ✅" });
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
};
