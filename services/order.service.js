import orderModel from "../models/order.model.js";

const create = (data) => orderModel.create(data);

const getAll = (limit = 10, page = 0) =>
  orderModel.find()
    .limit(limit)
    .skip(page * limit);

const getOne = (id) => orderModel.findById(id);

const update = (id, data) =>
  orderModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => orderModel.findByIdAndDelete(id);

const count = () => orderModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};
