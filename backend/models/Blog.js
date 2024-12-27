import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true, // Removes unnecessary spaces
        },
        content: {
            type: String,
            required: true,
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // References the User collection
            required: true,
        },
        categoryID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category", // References the Category collection
            required: true,
        },
        tags: {
            type: [String], // Corrected to an array of strings
            default: [], // Default to an empty array if not provided
        },
        headerImage: {
            type: String,
            default: "default-header.jpg", // Default image for blogs
        },
        status: {
            type: String,
            required: true,
            enum: ["draft", "published", "archived"], // Restrict to valid statuses
            default: "draft", // Default status is draft
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt
    }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
