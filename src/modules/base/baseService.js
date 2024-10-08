import { NotFoundError } from "../../utils/error.js";

class BaseService {
  #repository;

  constructor(repository, serviceName) {
    this.#repository = repository;
    this.serviceName = serviceName;
  }

  async create(item) {
    const data = await this.#repository.create(item);
    return data;
  }

  async findAll(query = {}) {
    const data = await this.#repository.findAll(query);
    return data;
  }

  async findById(id) {
    const data = await this.#repository.findById(id);
    if (!data) {
      throw new NotFoundError(`${this.serviceName} not found`);
    }
  }

  async findOne(query = {}) {
    const data = await this.#repository.findOne(query);
    if (!data) {
      throw new NotFoundError(`${this.serviceName} not found`);
    }
  }

  async updateById(query, item) {
    const data = await this.#repository.update(query, item);

    if (data[0] === 0) {
      throw new NotFoundError(`${this.serviceName} not found`);
    }
  }

  async deleteById(id) {
    const data = await this.#repository.deleteById(id);

    if (data === 0) {
      throw new NotFoundError(`${this.serviceName} not found`);
    }
  }
}

export default BaseService;
