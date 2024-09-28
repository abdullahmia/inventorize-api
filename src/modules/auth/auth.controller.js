import httpStatus from "http-status";
import catchError from "../../middleware/errors/catchError.js";
import responseHandler from "../../utils/responseHandler.js";
import authService from "./auth.service.js";

class AuthController {
  #authService;

  constructor(authService) {
    this.#authService = authService;
  }

  login = catchError(async (req, res, next) => {
    const data = await this.#authService.login(req.body);
    const resDoc = responseHandler(httpStatus.OK, "Login successful", data);
    res.status(resDoc.statusCode).json(resDoc);
  });
}

export default new AuthController(authService);
