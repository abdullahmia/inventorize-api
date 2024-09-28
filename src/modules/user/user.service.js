import { NotFoundError } from "../../utils/error.js";
import BaseService from "../base/baseService.js";
import userRepository from "./user.repository.js";

class UserService extends BaseService {
  #userRepository;
  #serviceName;

  constructor(userRepository, serviceName) {
    super(userRepository, serviceName);
    this.#userRepository = userRepository;
    this.#serviceName = serviceName;
  }

  async getAllUsers() {
    const users = await this.#userRepository.getAllUsers();
    return users;
  }

  async getUserById(id) {
    const user = await this.#userRepository.getUserById(id);

    if (!user) {
      throw new NotFoundError(`${this.#serviceName} not found`);
    }

    return user;
  }

  async createUser(body) {
    let user = await super.findOne({ where: { email: body.email } });

    if (user) {
      throw new ConflictError("User already exists");
    }

    user = await super.create(body);
    return user;
  }
}

export default new UserService(userRepository, "User");
