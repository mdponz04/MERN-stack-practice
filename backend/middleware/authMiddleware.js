import jwt from "jsonwebtoken";
import User from "../models/User.js";

const sendError = (res, statusCode, message) => {
    res.status(statusCode).json({ message });
};

export const authenticate = async (req, res, next) => {
    try {
        const token =
            req.cookies.token || req.headers.authorization?.split(" ")[1];
        if (!token)
            return sendError(res, 401, "Access denied. No token provided.");

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET,
            (err, decoded) => {
                if (err && err.name === "TokenExpiredError") {
                    return sendError(
                        res,
                        401,
                        "Token expired. Please log in again."
                    );
                }
                if (err) return sendError(res, 401, "Invalid token.");
                return decoded;
            }
        );

        const user = await User.findById(decoded.id).select("-password");
        if (!user) return sendError(res, 404, "User not found.");

        req.user = user;
        next();
    } catch (error) {
        console.error("Authentication Error:", error.message);
        sendError(res, 401, "Authentication failed.");
    }
};
