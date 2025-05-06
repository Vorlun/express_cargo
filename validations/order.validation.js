import Joi from "joi";

export const createOrderValidation = Joi.object({
  order_unique_id: Joi.string().required(),
  client_id: Joi.string().hex().length(24).required(),
  product_link: Joi.string().uri().required(),
  quantity: Joi.number().integer().positive().required(),
  summa: Joi.number().positive().required(),
  currency_type_id: Joi.string().hex().length(24).required(),
  truck: Joi.string().required(),
  description: Joi.string().allow(""),
});

export const updateOrderValidation = Joi.object({
  order_unique_id: Joi.string(),
  client_id: Joi.string().hex().length(24),
  product_link: Joi.string().uri(),
  quantity: Joi.number().integer().positive(),
  summa: Joi.number().positive(),
  currency_type_id: Joi.string().hex().length(24),
  truck: Joi.string(),
  description: Joi.string().allow(""),
});
