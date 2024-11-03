import { Category } from "../../models/index.js";
import BaseRepository from "../base/baseRepository.js";

class CategoryRepository extends BaseRepository {
  #model;

  constructor(modal) {
    super(modal);
    this.#model = modal;
  }
}

export default new CategoryRepository(Category);
