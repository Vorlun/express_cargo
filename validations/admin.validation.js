import Joi from "joi";

export const createAdminValidation = Joi.object({
  full_name: Joi.string().required(),
  user_name: Joi.string().required(),
  password: Joi.string().min(6).required(),
  phone_number: Joi.string().optional(),
  email: Joi.string().email().optional(),
  tg_link: Joi.string().uri().optional(),
  token: Joi.string().optional(),
  is_creator: Joi.boolean().optional(),
  is_active: Joi.boolean().optional(),
  description: Joi.string().allow(""),
});

export const updateAdminValidation = Joi.object({
  full_name: Joi.string(),
  user_name: Joi.string(),
  password: Joi.string().min(6),
  phone_number: Joi.string(),
  email: Joi.string().email(),
  tg_link: Joi.string().uri(),
  token: Joi.string(),
  is_creator: Joi.boolean(),
  is_active: Joi.boolean(),
  description: Joi.string().allow(""),
});
