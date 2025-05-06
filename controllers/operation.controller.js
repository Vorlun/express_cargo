import operationService from "../services/operation.service.js";

export const getAll = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 0;

    const totalItems = await operationService.count();
    const data = await operationService.getAll(limit, page);

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
    const operation = await operationService.getOne(req.params.id);

    if (!operation) {
      return res.status(404).json({
        success: false,
        message: "operation not found",
      });
    }

    res.status(200).json({
      success: true,
      data: operation,
    });
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const operation = await operationService.create(req.body);

    res.status(201).json({
      success: true,
      data: operation,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const updated = await operationService.update(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "operation not found",
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
    const deleted = await operationService.remove(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "operation not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "operation deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
