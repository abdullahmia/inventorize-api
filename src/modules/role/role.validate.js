import Joi from "joi";

const roleSchema = Joi.object({
  role_name: Joi.string().min(3).max(50).messages({
    "string.min": "Role name should have at least 3 characters",
    "string.max": "Role name should not exceed 50 characters",
    "any.required": "Role name is required",
  }),
  description: Joi.string().min(5).max(255).messages({
    "string.min": "Description should have at least 5 characters",
    "string.max": "Description should not exceed 255 characters",
    "any.required": "Description is required",
  }),
  permissionIds: Joi.array()
    .items(Joi.number().integer().positive())
    .min(1)
    .messages({
      "array.min": "At least one permission ID is required",
      "array.base": "Permission IDs must be an array",
      "array.items": "Permission IDs must be valid integers",
    }),
});

export const createRoleSchema = {
  body: roleSchema.fork(
    ["role_name", "description", "permissionIds"],
    (schema) => schema.required()
  ),
};

export const getOrDeleteByIdSchema = {
  params: Joi.object({
    id: Joi.number().integer().positive().required(),
  }),
};
