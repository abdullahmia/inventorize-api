import BaseService from "../base/baseService.js";
import categoryRepository from "./category.repository.js";

class CategoryService extends BaseService {
  #repository;
  #serviceName;

  constructor(repository, serviceName) {
    super(repository, serviceName);
    this.#repository = repository;
    this.#serviceName = serviceName;
  }

  async getCategories() {
    const getCategories = await super.findAll();
    return getCategories;
  }
}

export default new CategoryService(categoryRepository, "Category");
