import Joi from "joi";

const userSchema = Joi.object({
  first_name: Joi.string().min(2).max(50).messages({
    "string.min": "First name should have at least 2 characters",
    "string.max": "First name should not exceed 50 characters",
  }),
  last_name: Joi.string().min(2).max(50).messages({
    "string.min": "Last name should have at least 2 characters",
    "string.max": "Last name should not exceed 50 characters",
  }),
  email: Joi.string().email().messages({
    "string.email": "Email must be a valid email address",
  }),
  password: Joi.string().min(8).messages({
    "string.min": "Password should have at least 8 characters",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]+$/)
    .min(10)
    .max(15)
    .messages({
      "string.pattern.base": "Phone must contain only numbers",
      "string.min": "Phone must have at least 10 digits",
      "string.max": "Phone must not exceed 15 digits",
    }),
  address: Joi.string().allow(null, "").max(255).messages({
    "string.max": "Address should not exceed 255 characters",
  }),
  city: Joi.string().allow(null, "").max(100).messages({
    "string.max": "City should not exceed 100 characters",
  }),
  country: Joi.string().allow(null, "").max(100).messages({
    "string.max": "Country should not exceed 100 characters",
  }),
  state: Joi.string().allow(null, "").max(100).messages({
    "string.max": "State should not exceed 100 characters",
  }),
  zip_code: Joi.string().allow(null, "").max(20).messages({
    "string.max": "Zip code should not exceed 20 characters",
  }),
  role_id: Joi.number().integer().positive().messages({
    "number.base": "Role ID must be a number",
    "number.integer": "Role ID must be an integer",
    "number.positive": "Role ID must be a positive number",
  }),
});

export const createUserSchema = {
  body: userSchema.fork(
    ["first_name", "last_name", "email", "password", "role_id", "phone"],
    (schema) => schema.required()
  ),
};
