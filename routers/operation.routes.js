import { Router } from "express";
import * as operationController from "../controllers/operation.controller.js";
import validate from "../middlewares/validate.js";
import {
  createOperationValidation,
  updateOperationValidation,
} from "../validations/operation.validation.js";

const router = Router();

router.get("/", operationController.getAll);
router.get("/:id", operationController.getOne);
router.post("/", validate(createOperationValidation), operationController.create);
router.patch("/:id", validate(updateOperationValidation), operationController.update);

router.delete("/:id", operationController.remove);

export default router;
