import { NotFoundError, UnauthorizedError } from "../../utils/error.js";
import { compareHash } from "../../utils/hash.js";
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt.js";
import BaseService from "../base/baseService.js";
import userReposiotry from "../user/user.repository.js";

class AuthService extends BaseService {
  #userReposiotry;
  #serviceName;

  constructor(userReposiotry, serviceName) {
    super(userReposiotry, serviceName);
    this.#userReposiotry = userReposiotry;
    this.#serviceName = serviceName;
  }

  async login(body) {
    const { email, password } = body;
    const user = await this.#userReposiotry.getUserByEmail(email);

    if (!user) {
      throw new NotFoundError(`User not found`);
    }

    // Check password
    const isMatch = await compareHash(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedError(`Invalid credentials`);
    }

    // Generate the tokens
    const accessToken = generateAccessToken({
      user_id: user.id,
      email: user.email,
      role_id: user.role_id,
    });

    const refreshToken = generateRefreshToken({
      user_id: user.id,
      email: user.email,
      role_id: user.role_id,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        role_id: user.role_id,
      },
      token: {
        accessToken,
        refreshToken,
      },
    };
  }
}

export default new AuthService(userReposiotry, "auth");
