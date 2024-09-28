import { Router } from "express";
import { validate } from "../../middleware/validate/validate.js";
import authController from "../../modules/auth/auth.controller.js";
import { loginSchema } from "../../modules/auth/auth.validate.js";

const authRouter = Router();

authRouter.post("/login", validate(loginSchema), authController.login);

export default authRouter;
