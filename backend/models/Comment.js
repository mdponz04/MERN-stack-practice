import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        blogID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog", // References the Blog collection
            required: true,
            index: true, // Index for faster queries by blog
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // References the User collection
            required: true,
        },
        content: {
            type: String,
            required: true,
            trim: true, // Removes unnecessary spaces
        },
        parentCommentID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment", // References another Comment for threading
            default: null, // Null for top-level comments
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt
    }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
