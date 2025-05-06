import statusModel from "../models/status.model.js";

const create = (data) => statusModel.create(data);

const getAll = (limit = 10, page = 0) =>
  statusModel.find()
    .limit(limit)
    .skip(page * limit);

const getOne = (id) => statusModel.findById(id);

const update = (id, data) =>
  statusModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => statusModel.findByIdAndDelete(id);

const count = () => statusModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};
