import operationModel from "../models/operation.model.js";

const create = (data) => operationModel.create(data);

const getAll = (limit = 10, page = 0) =>
  operationModel.find()
    .limit(limit)
    .skip(page * limit);

const getOne = (id) => operationModel.findById(id);

const update = (id, data) =>
  operationModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => operationModel.findByIdAndDelete(id);

const count = () => operationModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};
