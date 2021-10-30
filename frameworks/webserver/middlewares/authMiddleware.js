import ErrorWithStatus from "../../../src/customError";
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader)
    next(new ErrorWithStatus("You need to authorize first!", 401));
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      next(
        new ErrorWithStatus("Failed to authenticate user, login again", 401)
      );
    req.userData = decoded;
    next();
  });
};

export default authMiddleware;
