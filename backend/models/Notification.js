import mongoose from "mongoose";

const notiSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // References the User collection
            required: true,
            index: true, // Index for faster lookups by user
        },
        message: {
            type: String,
            required: true,
            trim: true, // Trims unnecessary spaces
            maxlength: 500, // Restricts message length to 500 characters
        },
        type: {
            type: String,
            enum: ["like", "comment", "system", "follow"], // Categorizes notifications
            required: true,
            default: "system",
        },
        isRead: {
            type: Boolean,
            default: false, // Default is unread
        },
        link: {
            type: String, // Optional link to redirect the user
            required: false,
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt
    }
);

const Notification = mongoose.model("Notification", notiSchema);
export default Notification;
