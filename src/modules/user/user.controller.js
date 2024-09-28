import httpStatus from "http-status";
import catchError from "../../middleware/errors/catchError.js";
import responseHandler from "../../utils/responseHandler.js";
import userService from "./user.service.js";

class UserController {
  #userService;

  constructor(userService) {
    this.#userService = userService;
  }

  getAllUsers = catchError(async (req, res) => {
    const users = await this.#userService.getAllUsers();
    const resDoc = responseHandler(
      httpStatus.OK,
      "Users fetched successfully",
      users
    );
    res.status(resDoc.statusCode).json(resDoc);
  });

  getUserById = catchError(async (req, res) => {
    const user = await this.#userService.getUserById(req.params.id);
    const resDoc = responseHandler(
      httpStatus.OK,
      "User fetched successfully",
      user
    );
    res.status(resDoc.statusCode).json(resDoc);
  });

  createUser = catchError(async (req, res, next) => {
    const user = await this.#userService.createUser(req.body);
    const resDoc = responseHandler(
      httpStatus.CREATED,
      "User created successfully",
      user
    );
    res.status(resDoc.statusCode).json(resDoc);
  });
}

export default new UserController(userService);
