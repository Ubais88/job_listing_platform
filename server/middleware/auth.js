const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    const token =
      req.body.token
       || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is required",
      });
    }

    try {
      const decode = await jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
      req.user = decode;
    } catch (error) {
      console.log(error);
      return res.status(402).json({
        success: false,
        user: req.user,
        message: "Token is Invalid",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      error: error.message,
      message: "something went wrong while verfying token",
    });
  }
};
