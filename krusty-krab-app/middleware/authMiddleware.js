const jwt = require("jsonwebtoken");
const jwtSecret = "12EAA";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTZhMDM0OTE0MmVmYjM4ZmVlMWIwZDYiLCJpYXQiOjE3MDE0NDc2OTYsImV4cCI6MTcwMTQ1MTI5Nn0.LZzTXPvuvjGY0HYwjRHlu_jiti-lILqP25XFeG5V3xo";

  console.log("Token to verify:", token);

  if (!token) {
    return res.status(401).json({ error: "Authorization token is missing" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;
