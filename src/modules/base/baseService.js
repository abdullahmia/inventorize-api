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
      throw new Error(`${this.serviceName} not found`); // Todo: It will be a NotFoundError
    }
  }

  async findOne(query = {}) {
    const data = await this.#repository.findOne(query);
    if (!data) {
      throw new Error(`${this.serviceName} not found`); // Todo: It will be a NotFoundError
    }
  }

  async updateById(id, item) {
    const data = await this.#repository.update(id, item);

    if (data[0] === 0) {
      throw new Error(`${this.serviceName} not found`); // Todo: It will be a NotFoundError
    }
  }

  async deleteById(id) {
    const data = await this.#repository.deleteById(id);

    if (data === 0) {
      throw new Error(`${this.serviceName} not found`); // Todo: It will be a NotFoundError
    }
  }
}

export default BaseService;
