import Joi from "joi";

export const createClientValidation = Joi.object({
  full_name: Joi.string().min(3).max(100).required(),
  phone_number: Joi.string().required(),
  address: Joi.string().required(),
  location: Joi.string().required(),
  email: Joi.string().email().required(),
});

export const updateClientValidation = Joi.object({
  full_name: Joi.string().min(3).max(100),
  phone_number: Joi.string(),
  address: Joi.string(),
  location: Joi.string(),
  email: Joi.string().email(),
});
