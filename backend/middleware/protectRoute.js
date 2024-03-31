import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({
                error: "Unauthorized - no token provided"
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            console.log("unauth");
            return res.status(401).json({
                error: "Unauthorized - invalid token"
            });
        }
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            console.log("no user");
            return res.status(404).json({
                error: "User Not Found"
            });
        }
        req.user = user;
        next(); // Call next to continue with the request flow
    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
            return res.status(401).json({
                error: "Unauthorized - invalid token"
            });
        }
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export default protectRoute;
