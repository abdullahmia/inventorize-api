import httpStatus from "http-status";
import catchError from "../../middleware/errors/catchError.js";
import responseHandler from "../../utils/responseHandler.js";
import categoryService from "./category.service.js";

class CategoryController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  getAllCategories = catchError(async (req, res) => {
    const categories = await this.#service.getCategories();

    const resDoc = responseHandler(
      httpStatus.OK,
      "All categories fetched successfully",
      categories
    );

    res.status(resDoc.statusCode).json(resDoc);
  });
}

export default new CategoryController(categoryService);
