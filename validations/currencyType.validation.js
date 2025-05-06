import Joi from "joi";

export const createCurrencyTypeValidation = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(""),
});

export const updateCurrencyTypeValidation = Joi.object({
  name: Joi.string(),
  description: Joi.string().allow(""),
});
