import Joi from "joi";
import { BadRequestError } from "../../utils/error.js";
import { pick } from "../../utils/pick.js";

export const validate = (schema) => (req, _res, next) => {
  try {
    const validSchema = pick(schema, ["params", "query", "body"]);
    const object = pick(req, Object.keys(validSchema));

    // Add this check for empty body when body validation is expected
    if (validSchema.body && Object.keys(object.body || {}).length === 0) {
      throw new BadRequestError("Request body cannot be empty");
    }

    const { value, error } = Joi.compile(validSchema)
      .prefs({ errors: { label: "key" }, abortEarly: false })
      .validate(object);

    if (error) {
      const errorMessage = error.details
        .map((details) => details.message.replace(/"/g, ""))
        .join(", ");

      throw new BadRequestError(errorMessage);
    }

    Object.assign(req, value);
    return next();
  } catch (error) {
    return next(error);
  }
};
