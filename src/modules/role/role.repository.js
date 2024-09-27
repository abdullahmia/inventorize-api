import { Permission, Role } from "../../models/index.js";
import { NotFoundError } from "../../utils/error.js";
import BaseRepository from "../base/baseRepository.js";

class RoleRepository extends BaseRepository {
  #model;

  constructor(model) {
    super(model);
    this.#model = model;
  }

  async getAllRoles() {
    const roles = await super.findAll({
      attributes: ["id", "name", "description"],
      include: {
        model: Permission,
        as: "permissions",
        attributes: ["id", "name", "description"],
        through: {
          attributes: [],
        },
      },
    });

    return roles;
  }

  async getRoleById(id) {
    const role = await super.findOne({
      where: { id },
      include: {
        model: Permission,
        as: "permissions",
        attributes: ["id", "name", "description"],
        through: {
          attributes: [],
        },
      },
    });
    return role;
  }

  async attachPermission(roleId, permissionIds) {
    const role = await super.findById(roleId);
    if (!role) {
      throw new NotFoundError("Role not found");
    }
    await role.setPermissions(permissionIds);

    return role;
  }

  async detachPermission(roleId, permissionIds) {
    const role = await super.findById(roleId);
    if (!role) {
      throw new NotFoundError("Role not found");
    }
    await role.removePermissions(permissionIds);

    return role;
  }

  async updateRole(id, body) {
    const { name, description, permission_ids } = body;
    const data = await super.update({ where: { id } }, { name, description });

    if (data[0] === 0) {
      throw new NotFoundError("Role not found");
    }

    if (data[0] === 1) {
      if (permission_ids) {
        const role = await super.findOne({ where: { id } });
        await role.setPermissions(permission_ids);
      }
    }
  }
}

export default new RoleRepository(Role);
