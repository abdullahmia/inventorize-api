import httpStatus from "http-status";
import catchError from "../../middleware/errors/catchError.js";
import responseHandler from "../../utils/responseHandler.js";
import permissionService from "./permission.service.js";

class PermissionController {
  #permissionService;
  constructor(permissionService) {
    this.#permissionService = permissionService;
  }

  getAllPermissions = catchError(async (req, res, next) => {
    const data = await this.#permissionService.getAllPermissions();

    const resDoc = responseHandler(
      httpStatus.OK,
      "All permissions fetched successfully",
      data
    );

    res.status(res.statusCode).json(resDoc);
  });

  createPermission = catchError(async (req, res, next) => {
    const data = await this.#permissionService.createPermission({
      body: req.body,
    });
    const resDoc = responseHandler(
      httpStatus.CREATED,
      "Permission created successfully",
      data
    );
    return res.status(resDoc.statusCode).json(resDoc);
  });
}

export default new PermissionController(permissionService);
