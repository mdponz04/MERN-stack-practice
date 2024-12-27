import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true, // Email is mandatory
            unique: true, // Ensure no duplicate emails
            lowercase: true, // Normalize case
            match: [/\S+@\S+\.\S+/, "Invalid email format"], // Regex for email validation
        },
        password: {
            type: String,
            required: true, // Password is mandatory
        },
        role: {
            type: String,
            required: true, // Role is mandatory
            enum: ["superadmin", "moderator"], // Restrict to specific roles
            default: "moderator", // Set a default role
        },
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt
    }
);

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
