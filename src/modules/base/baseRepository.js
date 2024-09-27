class BaseRepository {
  #model;
  constructor(model) {
    this.#model = model;
  }

  async create(item) {
    const data = await this.#model.create(item);
    return data;
  }

  async findAll(query = {}) {
    const data = await this.#model.findAll(query);
    return data;
  }

  async findById(id) {
    const data = await this.#model.findByPk(id);
    return data;
  }

  async findOne(query = {}) {
    const data = await this.#model.findOne({
      ...query,
    });
    return data;
  }

  async update(query, item) {
    const data = await this.#model.update(
      { ...item },
      {
        ...query,
      }
    );

    return data;
  }

  async deleteById(id) {
    return await this.#model.destroy({
      where: { ...id },
    });
  }
}

export default BaseRepository;
