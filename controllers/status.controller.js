import statusService from "../services/status.service.js";

export const getAll = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 0;

    const totalItems = await statusService.count();
    const data = await statusService.getAll(limit, page);

    res.status(200).json({
      success: true,
      meta: {
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
        currentPage: page,
        limit,
      },
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const status = await statusService.getOne(req.params.id);

    if (!status) {
      return res.status(404).json({
        success: false,
        message: "status not found",
      });
    }

    res.status(200).json({
      success: true,
      data: status,
    });
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const status = await statusService.create(req.body);

    res.status(201).json({
      success: true,
      data: status,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const updated = await statusService.update(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "status not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const deleted = await statusService.remove(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "status not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "status deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
