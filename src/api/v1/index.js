import { Router } from "express";
import permissionRouter from "./permission.route.js";
import roleRouter from "./role.route.js";

const v1Router = Router();

v1Router.use("/permissions", permissionRouter);
v1Router.use("/roles", roleRouter);

export default v1Router;
