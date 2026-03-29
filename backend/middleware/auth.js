import jwt from "jsonwebtoken";

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.json({
      success: false, 
      message: "Token not found! Login Again",
    });

  const token = authHeader.split(" ")[1]; // Bearer <token>

  try {
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = token_decoded.id;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token Expired! Please login again!",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid Token!",
    });
  }
};

export default authMiddleWare;
