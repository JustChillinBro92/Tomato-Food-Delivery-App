import jwt from "jsonwebtoken";

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.json({ success: false, message: "Token not found! Login Again" });

  const token = authHeader.split(" ")[1]; // Bearer <token>

    try {
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = token_decoded.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Token expired or Invalid!" });
    }
}

export default authMiddleWare;