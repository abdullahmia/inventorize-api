import { Router } from "express";
import { validate } from "../../middleware/validate/validate.js";
import roleController from "../../modules/role/role.controller.js";
import {
  attachDetachPermissionSchema,
  createRoleSchema,
  getOrDeleteByIdSchema,
  updateRoleSchema,
} from "../../modules/role/role.validate.js";

const roleRouter = Router();

roleRouter
  .get("/", roleController.getAllRoles)
  .post("/", validate(createRoleSchema), roleController.createRole)
  .delete(
    "/:id",
    validate(getOrDeleteByIdSchema),
    roleController.deleteRoleById
  )
  .get("/:id", validate(getOrDeleteByIdSchema), roleController.getRoleById)
  .patch(
    "/:id/attach-permission",
    validate(attachDetachPermissionSchema),
    roleController.attachPermission
  )
  .patch(
    "/:id/detach-permission",
    validate(attachDetachPermissionSchema),
    roleController.detachPermission
  )
  .patch("/:id", validate(updateRoleSchema), roleController.updateRole);

export default roleRouter;
