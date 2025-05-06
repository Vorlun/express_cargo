import { Router } from "express";
import * as currencyTypeController from "../controllers/currencyType.controller.js";
import validate from "../middlewares/validate.js";
import {
  createCurrencyTypeValidation,
  updateCurrencyTypeValidation,
} from "../validations/currencyType.validation.js";

const router = Router();

router.get("/", currencyTypeController.getAll);
router.get("/:id", currencyTypeController.getOne);
router.post("/", validate(createCurrencyTypeValidation), currencyTypeController.create);
router.patch("/:id", validate(updateCurrencyTypeValidation), currencyTypeController.update);

router.delete("/:id", currencyTypeController.remove);

export default router;
