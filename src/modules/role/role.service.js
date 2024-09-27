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

  async getRoleById(id) {
    const role = await this.#roleRepository.getRoleById(id);
    return role;
  }

  async createRole(body) {
    const { name, description, permission_ids } = body;
    const data = await super.create({ name, description });

    if (permission_ids) {
      await data.setPermissions(permission_ids);
    }
    return data;
  }

  async deleteRoleById(id) {
    const deletedRole = await super.deleteById({ id });
    return deletedRole;
  }

  async attachPermission(roleId, permissionIds) {
    const role = await this.#roleRepository.attachPermission(
      roleId,
      permissionIds
    );
    return role;
  }

  async detachPermission(roleId, permissionIds) {
    const role = await this.#roleRepository.detachPermission(
      roleId,
      permissionIds
    );
    return role;
  }

  async updateRole(id, body) {
    const role = await this.#roleRepository.updateRole(id, body);
    return role;
  }
}

export default new RoleService(roleRepository, "role");
