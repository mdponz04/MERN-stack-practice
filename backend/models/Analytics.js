import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
    {
        blogID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog", // References the Blog collection
            required: true,
        },
        views: {
            type: Number,
            default: 0, // Default value for views
        },
        likesCount: {
            type: Number,
            default: 0, // Default value for likes
        },
        commentsCount: {
            type: Number,
            default: 0, // Default value for comments
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt
    }
);

const Analytics = mongoose.model("Analytics", analyticsSchema);
export default Analytics;
