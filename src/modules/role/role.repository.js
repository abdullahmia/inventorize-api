import { Permission, Role } from "../../models/index.js";
import BaseRepository from "../base/baseRepository.js";

class RoleRepository extends BaseRepository {
  #model;

  constructor(model) {
    super(model);
    this.#model = model;
  }

  async getAllRoles() {
    const roles = await super.findAll({
      attributes: ["role_id", "role_name", "description"],
      include: {
        model: Permission,
        as: "permissions",
        attributes: ["permission_id", "permission_name", "description"],
        through: {
          attributes: [],
        },
      },
    });
    return roles;
  }
}

export default new RoleRepository(Role);
