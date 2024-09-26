import BaseService from "../base/baseService.js";
import roleRepository from "./role.repository.js";

class RoleService extends BaseService {
  #roleRepository;
  #serviceName;

  constructor(roleRepository, serviceName) {
    super(roleRepository, serviceName);
    this.#roleRepository = roleRepository;
    this.#serviceName = serviceName;
  }

  async getAllRoles() {
    const data = await this.#roleRepository.getAllRoles();
    return data;
  }

  async createRole(body) {
    const { role_name, description, permissionIds } = body;
    const data = await super.create({ role_name, description });

    if (permissionIds) {
      await data.setPermissions(permissionIds);
    }
    return data;
  }

  async deleteRoleById(id) {
    const deletedRole = await super.deleteById({ role_id: id });
    return deletedRole;
  }
}

export default new RoleService(roleRepository, "role");
