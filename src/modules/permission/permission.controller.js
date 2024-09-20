import httpStatus from "http-status";
import catchError from "../../middleware/errors/catchError.js";
import responseHandler from "../../utils/responseHandler.js";

class PermissionController {
  constructor() {}

  getAllPermissions = catchError(async (req, res, next) => {
    const resDoc = responseHandler(
      httpStatus.OK,
      "All permissions fetched successfully",
      []
    );

    res.status(res.statusCode).json(resDoc);
  });
}

export default new PermissionController();
