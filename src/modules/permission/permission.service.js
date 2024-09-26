import BaseService from "../base/baseService.js";
import permissionRepository from "./permission.repository.js";

class PermissionService extends BaseService {
  #permissionRepository;
  #serviceName;

  constructor(permissionRepository, serviceName) {
    super(permissionRepository, serviceName);
    this.#permissionRepository = permissionRepository;
    this.#serviceName = serviceName;
  }

  async createPermission(data) {
    const { body } = data;
    const permission = await super.create(body);
    return permission;
  }

  async getAllPermissions() {
    const data = await this.#permissionRepository.getAllPermissions();
    return data;
  }
}

export default new PermissionService(permissionRepository, "permission");
