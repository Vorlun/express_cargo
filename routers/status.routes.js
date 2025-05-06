import { Router } from "express";
import * as statusController from "../controllers/status.controller.js";
import validate from "../middlewares/validate.js";
import {
  createStatusValidation,
  updateStatusValidation,
} from "../validations/status.validation.js";

const router = Router();

router.get("/", statusController.getAll);
router.get("/:id", statusController.getOne);
router.post("/", validate(createStatusValidation), statusController.create);
router.patch("/:id", validate(updateStatusValidation), statusController.update);

router.delete("/:id", statusController.remove);

export default router;
