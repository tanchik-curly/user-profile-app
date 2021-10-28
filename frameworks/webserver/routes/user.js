import {
  registerUser,
  login,
  getUserProfile,
} from "../../../adapters/controllers/userController";
import authValidator from "../middlewares/authValidator";

const userRouter = (router) => {
  router.post("/register", authValidator, registerUser);
  router.post("/login", login);

  router.get("/my-profile", getUserProfile);
};

export default userRouter;
