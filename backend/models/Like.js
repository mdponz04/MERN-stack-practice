import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
    {
        blogID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog", // References the Blog collection
            required: true,
            index: true, // Index for faster lookups by blog
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // References the User collection
            required: true,
            index: true, // Index for faster lookups by user
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt
    }
);

// Enforce unique combinations of blogID and userID
likeSchema.index({ blogID: 1, userID: 1 }, { unique: true });

const Like = mongoose.model("Like", likeSchema);
export default Like;
