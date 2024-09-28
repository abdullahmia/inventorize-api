import { Router } from "express";
import { validate } from "../../middleware/validate/validate.js";
import userController from "../../modules/user/user.controller.js";
import { createUserSchema } from "../../modules/user/user.validate.js";

const userRoute = Router();

userRoute
  .route("/")
  .get(userController.getAllUsers)
  .post(validate(createUserSchema), userController.createUser);

userRoute.route("/:id").get(userController.getUserById);

export default userRoute;
