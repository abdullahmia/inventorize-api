import Joi from "joi";

const roleSchema = Joi.object({
  name: Joi.string().min(3).max(50).messages({
    "string.min": "Role name should have at least 3 characters",
    "string.max": "Role name should not exceed 50 characters",
    "any.required": "Role name is required",
  }),
  description: Joi.string().min(5).max(255).messages({
    "string.min": "Description should have at least 5 characters",
    "string.max": "Description should not exceed 255 characters",
    "any.required": "Description is required",
  }),
  permission_ids: Joi.array()
    .items(Joi.number().integer().positive())
    .min(1)
    .messages({
      "array.min": "At least one permission ID is required",
      "array.base": "Permission IDs must be an array",
      "array.items": "Permission IDs must be valid integers",
    }),
});

export const createRoleSchema = {
  body: roleSchema.fork(["name", "description", "permission_ids"], (schema) =>
    schema.required()
  ),
};

export const updateRoleSchema = {
  params: Joi.object({
    id: Joi.number().integer().positive().required(),
  }),
  body: roleSchema.fork(["name", "description", "permission_ids"], (schema) =>
    schema.optional().min(1)
  ),
};

export const getOrDeleteByIdSchema = {
  params: Joi.object({
    id: Joi.number().integer().positive().required(),
  }),
};

export const attachDetachPermissionSchema = {
  params: {
    id: Joi.number().integer().positive().required(),
  },
  body: roleSchema.fork(["permission_ids"], (schema) => schema.required()),
};
