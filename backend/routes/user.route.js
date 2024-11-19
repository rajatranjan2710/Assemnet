import express from "express";
import { user } from "../models/user.model.js";

const Router = express.Router();

//create user

Router.post("/create", async (req, res) => {
  const { name, email, dob } = req.body;

  try {
    console.log("name", name);
    console.log("email", email);
    console.log("dob", dob);
    if (!name || !email || !dob) {
      res.status(400).json({ error: "All fields are required" });
    }

    const User = new user({
      name,
      email,
      dob,
    });

    await User.save();

    res.status(201).json({ message: "User created successfully", user: User });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//get users list

Router.get("/", async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json({ users });
  } catch {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

//update user

Router.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, dob } = req.body;

  console.log("Ipdate");

  try {
    const updatedUser = await user.findByIdAndUpdate(id, { name, email, dob });
    console.log(updatedUser);
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

Router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await user.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

export default Router;
