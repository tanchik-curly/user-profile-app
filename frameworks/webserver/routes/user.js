import {
  registerUser,
  login,
  getUserProfile,
} from "../../../adapters/controllers/userController";
import authValidator from "../middlewares/authDataValidator";
import authMiddleware from "../middlewares/authMiddleware";

const userRouter = (router) => {
  router.post("/register", authValidator, registerUser);
  router.post("/login", login);

  router.get("/my-profile", authMiddleware, getUserProfile);
};

export default userRouter;
