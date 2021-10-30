import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import ErrorWithStatus from "../../src/customError";

const userService = (userRepository) => {
  const hashPassword = async (password) => {
    return bcrypt.hash(password, 10);
  };

  const generateAccessToken = (data) => {
    const payload = {
      id: data.id,
      email: data.email,
      username: data.username,
    };
    const options = {
      algorithm: "HS256",
      expiresIn: 600,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, options);
  };

  const register = async (data) => {
    const userExist = await userRepository.findByEmail(data.email);
    if (userExist) throw new ErrorWithStatus("User already exists", 403);

    const newPassword = await hashPassword(data.password);
    data.password = newPassword;
    const userData = await userRepository.createUser(data);
    return { auth: true, token: generateAccessToken(userData) };
  };

  const login = async (data) => {
    const user = await userRepository.findUserByEmailAndPassword(data);
    if (!user) throw new ErrorWithStatus("You need to sign up first!", 400);
    const userDate = user.dataValues;

    return new Promise((resolve, reject) => {
      bcrypt.compare(data.password, userDate.password, (err, success) => {
        if (err) reject(new ErrorWithStatus(err, 501));
        if (success)
          resolve({ auth: true, token: generateAccessToken(userDate) });

        reject(
          new ErrorWithStatus("Your password is incorrect, try again!", 401)
        );
      });
    });
  };

  const getUserProfile = async (id) => {
    return userRepository.findById(id);
  };

  return {
    register,
    login,
    getUserProfile,
  };
};

export default userService;
