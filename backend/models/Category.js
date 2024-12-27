import mongoose from "mongoose";

const cateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt
    }
);

const Category = mongoose.model("Category", cateSchema);
export default Category;
