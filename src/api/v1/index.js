import { Router } from "express";
import authRouter from "./auth.route.js";
import categoryRouter from "./category.route.js";
import permissionRouter from "./permission.route.js";
import roleRouter from "./role.route.js";
import userRouter from "./user.route.js";

const v1Router = Router();

v1Router.use("/permissions", permissionRouter);
v1Router.use("/roles", roleRouter);
v1Router.use("/users", userRouter);
v1Router.use("/auth", authRouter);
v1Router.use("/category", categoryRouter);

export default v1Router;
