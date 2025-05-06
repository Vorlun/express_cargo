import { Router } from "express";
import * as clientController from "../controllers/client.controller.js";
import validate from "../middlewares/validate.js";
import {
  createClientValidation,
  updateClientValidation,
} from "../validations/client.validation.js";

const router = Router();

router.get("/", clientController.getAll);
router.get("/:id", clientController.getOne);
router.post("/", validate(createClientValidation), clientController.create);
router.patch("/:id", validate(updateClientValidation), clientController.update);

router.delete("/:id", clientController.remove);

export default router;
