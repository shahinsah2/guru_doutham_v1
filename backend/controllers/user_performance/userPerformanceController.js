const UserPerformance = require('../../models/user_performance/userPerformanceModel');

// Create User Performance
exports.createUserPerformance = async (req, res) => {
  try {
    const newUserPerformance = new UserPerformance(req.body);
    await newUserPerformance.save();
    res.status(201).json({ message: "User performance added successfully", data: newUserPerformance });
  } catch (error) {
    res.status(500).json({ message: "Error adding user performance", error });
  }
};

// Get all User Performances
exports.getAllUserPerformances = async (req, res) => {
  try {
    const userPerformances = await UserPerformance.find();
    res.status(200).json({ message: "Success", data: userPerformances });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user performances", error });
  }
};

// Get User Performance by ID
exports.getUserPerformanceById = async (req, res) => {
  try {
    const userPerformance = await UserPerformance.findById(req.params.id);
    if (!userPerformance) {
      return res.status(404).json({ message: "User performance not found" });
    }
    res.status(200).json({ message: "Success", data: userPerformance });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user performance", error });
  }
};

// Update User Performance
exports.updateUserPerformance = async (req, res) => {
  try {
    const updatedUserPerformance = await UserPerformance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUserPerformance) {
      return res.status(404).json({ message: "User performance not found" });
    }
    res.status(200).json({ message: "User performance updated successfully", data: updatedUserPerformance });
  } catch (error) {
    res.status(500).json({ message: "Error updating user performance", error });
  }
};

// Delete User Performance
exports.deleteUserPerformance = async (req, res) => {
  try {
    const deletedUserPerformance = await UserPerformance.findByIdAndDelete(req.params.id);
    if (!deletedUserPerformance) {
      return res.status(404).json({ message: "User performance not found" });
    }
    res.status(200).json({ message: "User performance deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user performance", error });
  }
};
