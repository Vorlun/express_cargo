import currencyTypeModel from "../models/currencyType.model.js";

const create = (data) => currencyTypeModel.create(data);

const getAll = (limit = 10, page = 0) =>
  currencyTypeModel.find()
    .limit(limit)
    .skip(page * limit);

const getOne = (id) => currencyTypeModel.findById(id);

const update = (id, data) =>
  currencyTypeModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => currencyTypeModel.findByIdAndDelete(id);

const count = () => currencyTypeModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};
