import { Router } from "express";
import permissionController from "../../modules/permission/permission.controller.js";

const permissionRouter = Router();

permissionRouter
  .get("/", permissionController.getAllPermissions)
  .post("/", permissionController.createPermission);

export default permissionRouter;
