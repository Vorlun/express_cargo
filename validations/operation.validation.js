import Joi from "joi";

export const createOperationValidation = Joi.object({
  order_id: Joi.string().hex().length(24).required(),
  status_id: Joi.string().hex().length(24).required(),
  operation_date: Joi.date().required(),
  admin_id: Joi.string().hex().length(24).required(),
  description: Joi.string().allow(""),
});

export const updateOperationValidation = Joi.object({
  order_id: Joi.string().hex().length(24),
  status_id: Joi.string().hex().length(24),
  operation_date: Joi.date(),
  admin_id: Joi.string().hex().length(24),
  description: Joi.string().allow(""),
});
