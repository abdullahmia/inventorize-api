import { Router } from "express";
import permissionRouter from "./permission.route.js";

const rootRouter = Router();

rootRouter.use("/permissions", permissionRouter);

export default rootRouter;
