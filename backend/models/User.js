import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true, // Removes unnecessary spaces
        },
        email: {
            type: String,
            required: true,
            unique: true, // Ensures no duplicate emails
            lowercase: true, // Normalizes email case
            match: [/\S+@\S+\.\S+/, "Invalid email format"], // Regex validation for emails
        },
        password: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            default: "", // Sets a default value for empty bios
            trim: true,
        },
        profilePicture: {
            type: String,
            default: "default-profile.jpg", // Default image for profiles
        },
        emailValidation: {
            type: Number,
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt
    }
);

const User = mongoose.model("User", userSchema);
export default User;
