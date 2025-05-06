import { Router } from "express";
import * as orderController from "../controllers/order.controller.js";
import validate from "../middlewares/validate.js";
import {
  createOrderValidation,
  updateOrderValidation,
} from "../validations/order.validation.js";

const router = Router();

router.get("/", orderController.getAll);
router.get("/:id", orderController.getOne);
router.post("/", validate(createOrderValidation), orderController.create);
router.patch("/:id", validate(updateOrderValidation), orderController.update);

router.delete("/:id", orderController.remove);

export default router;
