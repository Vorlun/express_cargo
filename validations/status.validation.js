import Joi from "joi";

export const createStatusValidation = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(""),
});

export const updateStatusValidation = Joi.object({
  name: Joi.string(),
  description: Joi.string().allow(""),
});
