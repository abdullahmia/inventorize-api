import { Permission } from "../../models/permission.model.js";
import { Role } from "../../models/role.model.js";
import { User } from "../../models/user.model.js";
import BaseRepository from "../base/baseRepository.js";

class UserReposiroty extends BaseRepository {
  #model;

  constructor(model) {
    super(model);
    this.#model = model;
  }

  async getAllUsers() {
    const users = await super.findAll({
      attributes: { exclude: ["password"] },
      include: {
        model: Role,
        as: "role",
      },
    });
    return users;
  }

  async getUserById(id) {
    const user = await super.findOne({
      where: {
        id: id,
      },
      include: {
        model: Role,
        as: "role",
        include: {
          model: Permission,
          as: "permissions",
          through: {
            attributes: [],
          },
        },
      },
    });

    return user;
  }
}

export default new UserReposiroty(User);
