import userRepository from "../../frameworks/database/postgresql/repositories/userRepository";
import userService from "../../app/services/userService";

const service = userService(userRepository());

const registerUser = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await service.register(data);
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
};

const login = (req, res, next) => {};

const getUserProfile = (req, res, next) => {};

export { registerUser, login, getUserProfile };
