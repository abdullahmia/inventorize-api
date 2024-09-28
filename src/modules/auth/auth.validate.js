import Joi from "joi";

export const loginSchema = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(6)
      .custom((value, helpers) => {
        if (!/[a-z]/.test(value)) {
          return helpers.message(
            "Password must contain at least one lowercase letter."
          );
        }
        if (!/[A-Z]/.test(value)) {
          return helpers.message(
            "Password must contain at least one uppercase letter."
          );
        }
        if (!/[0-9]/.test(value)) {
          return helpers.message("Password must contain at least one digit.");
        }
        // if (!/[!@#\$%\^&\*]/.test(value)) {
        //   return helpers.message(
        //     "Password must contain at least one special character."
        //   );
        // }
        return value;
      })
      .required(),
  }),
};
