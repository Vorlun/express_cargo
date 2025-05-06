import clientModel from "../models/client.model.js";

const create = (data) => clientModel.create(data);

const getAll = (limit = 10, page = 0) =>
  clientModel.find()
    .limit(limit)
    .skip(page * limit);

const getOne = (id) => clientModel.findById(id);

const update = (id, data) =>
  clientModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

const remove = (id) => clientModel.findByIdAndDelete(id);

const count = () => clientModel.countDocuments();

export default {
  create,
  getAll,
  getOne,
  update,
  remove,
  count,
};
