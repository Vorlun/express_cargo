import AdminModel from "../models/admin.model.js";

const create = (data) => AdminModel.create(data);

const getAll = (limit = 10, page = 0) =>
  AdminModel.find()
    .limit(limit)
    .skip(page * limit);

const getOne = (id) => AdminModel.findById(id);

const update = (id, data) =>
  AdminModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => AdminModel.findByIdAndDelete(id);

const count = () => AdminModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};
