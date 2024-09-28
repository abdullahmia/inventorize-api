import { Router } from "express";
import permissionRouter from "./permission.route.js";
import roleRouter from "./role.route.js";
import userRouter from "./user.route.js";

const v1Router = Router();

v1Router.use("/permissions", permissionRouter);
v1Router.use("/roles", roleRouter);
v1Router.use("/users", userRouter);

export default v1Router;
