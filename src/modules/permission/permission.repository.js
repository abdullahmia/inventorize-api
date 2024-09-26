import BaseRepository from "../base/baseRepository.js";
import { Permission } from "../../models/index.js";

class PermissionRepository extends BaseRepository {
  #model;

  constructor(model) {
    super(model);
    this.#model = model;
  }

  async getAllPermissions() {
    const permissions = await super.findAll({});
    return permissions;
  }
}

export default new PermissionRepository(Permission);
