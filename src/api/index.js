import { Router } from "express";
import { logInterceptor } from "../middleware/interceptors/loggerInterceptor.js";
import v1Router from "./v1/index.js";

const rootRouter = Router();

rootRouter.use(logInterceptor).use("/v1", v1Router);

export default rootRouter;
