import { Router } from "express";
import { validate } from "../../middleware/validate/validate.js";
import roleController from "../../modules/role/role.controller.js";
import {
  createRoleSchema,
  getOrDeleteByIdSchema,
} from "../../modules/role/role.validate.js";

const roleRouter = Router();

roleRouter
  .get("/", roleController.getAllRoles)
  .post("/", validate(createRoleSchema), roleController.createRole)
  .delete(
    "/:id",
    validate(getOrDeleteByIdSchema),
    roleController.deleteRoleById
  );
export default roleRouter;
