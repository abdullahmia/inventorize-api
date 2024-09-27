import httpStatus from "http-status";
import catchError from "../../middleware/errors/catchError.js";
import responseHandler from "../../utils/responseHandler.js";
import roleService from "./role.service.js";

class RoleController {
  #roleService;

  constructor(roleService) {
    this.#roleService = roleService;
  }

  getAllRoles = catchError(async (req, res, next) => {
    const data = await this.#roleService.getAllRoles();
    const resDoc = responseHandler(
      httpStatus.OK,
      "All roles fetched successfully",
      data
    );
    res.status(resDoc.statusCode).json(resDoc);
  });

  getRoleById = catchError(async (req, res, next) => {
    const role = await this.#roleService.getRoleById(req.params.id);
    const resDoc = responseHandler(
      httpStatus.OK,
      "Role fetched successfully",
      role
    );
    return res.status(resDoc.statusCode).json(resDoc);
  });

  createRole = catchError(async (req, res, next) => {
    const role = await this.#roleService.createRole(req.body);
    const resDoc = responseHandler(
      httpStatus.CREATED,
      "Role created successfully",
      role
    );
    return res.status(resDoc.statusCode).json(resDoc);
  });

  deleteRoleById = catchError(async (req, res, next) => {
    const deletedRole = await this.#roleService.deleteRoleById(req.params.id);
    const resDoc = responseHandler(
      httpStatus.OK,
      "Role deleted successfully",
      deletedRole
    );
    return res.status(resDoc.statusCode).json(resDoc);
  });

  attachPermission = catchError(async (req, res, next) => {
    console.log("Permission id: ", req.body.permission_ids);
    const role = await this.#roleService.attachPermission(
      req.params.id,
      req.body.permission_ids
    );
    const resDoc = responseHandler(
      httpStatus.OK,
      "Permission attached successfully",
      role
    );
    return res.status(resDoc.statusCode).json(resDoc);
  });

  detachPermission = catchError(async (req, res, next) => {
    const role = await this.#roleService.detachPermission(
      req.params.id,
      req.body.permission_ids
    );
    const resDoc = responseHandler(
      httpStatus.OK,
      "Permission detached successfully",
      role
    );
    return res.status(resDoc.statusCode).json(resDoc);
  });

  updateRole = catchError(async (req, res, next) => {
    const role = await this.#roleService.updateRole(req.params.id, req.body);
    const resDoc = responseHandler(
      httpStatus.OK,
      "Role updated successfully",
      role
    );
    return res.status(resDoc.statusCode).json(resDoc);
  });
}

export default new RoleController(roleService);
