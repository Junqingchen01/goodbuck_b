const { validationResult } = require("express-validator");
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//login
exports.login = async (req, res) => {
  try {
    const { Name, Password } = req.body;
    const user = await User.findOne({
      where: { Name },
    });

    if (user) {
      const isPasswordMatch = await bcrypt.compare(Password, user.Password);

      if (isPasswordMatch) {
        const token = jwt.sign(
          { UserID: user.UserID, Name: user.Name },
          "secret-key",
          { expiresIn: "1h" } 
        );

        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


//get all user  for test

exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
  
      if (users.length > 0) {
        res.status(200).json(users);
        console.log("Users:", users);

      } else {
        res.status(204).json({ message: "No users found" });
      }
    } catch (error) {
      console.error("Error fetching all users:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };


exports.register = async (req, res) => {
    try {
      const { Name, Email, Password } = req.body;
  
      const existingUser = await User.findOne({
        where: { Email },
      });
  
      if (existingUser) {
        return res.status(400).json({ message: "User with this email already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(Password, 10);
  
      const newUser = await User.create({
        Name,
        Email,
        Password: hashedPassword, 
      });
  
      res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };