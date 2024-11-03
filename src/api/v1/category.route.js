import { Router } from "express";
import categoryController from "../../modules/category/category.controller.js";

const roleRouter = Router();

roleRouter.route("/").get(categoryController.getAllCategories);

export default roleRouter;
