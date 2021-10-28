import { Router } from "express";
import userRouter from "./user";

const router = Router();

userRouter(router);

export default router;
