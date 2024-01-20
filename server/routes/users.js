import { Router } from "express";
import { UserController } from "../controllers/users.js";

export const userRouter = Router();

userRouter.post("/", UserController.register);
userRouter.get("/", UserController.login);
