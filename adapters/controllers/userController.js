import userRepository from "../../frameworks/database/postgresql/repositories/userRepository";
import userService from "../../app/services/userService";

const service = userService(userRepository());

const registerUser = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await service.register(data);
    res.status(201).send({ ...result, message: "User saved successfully!" });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await service.login(data);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

const getUserProfile = async (req, res, next) => {
  const { userData } = req;
  try {
    const result = await service.getUserProfile(userData.id);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

export { registerUser, login, getUserProfile };
