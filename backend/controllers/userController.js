import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
    try {
        console.log("Request received for registration");
        const { name, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User does not exist" });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        //return cookie
        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
            // maxAge: 100000,
            // signed: true,
        });
        res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export const updateUserProfile = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming `req.user` is populated by authentication middleware
        const { name, bio, profilePicture } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, bio, profilePicture },
            { new: true } // Return the updated document
        );

        res.status(200).json({
            message: "Profile updated successfully",
            updatedUser,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export const getUserProfile = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming `req.user` is populated by authentication middleware
        const user = await User.findById(userId).select("-password"); // Exclude password
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
