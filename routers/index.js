import { Router } from "express";
import clientRouter from "./client.routes.js"
import orderRouter from "./order.routes.js"
import currencyType from "./currencyType.routes.js"
import adminRouter from "./admin.routes.js"
import operationRouter from "./operation.routes.js"
import statusRouter from "./status.routes.js"

const router = Router()

router.use("/client", clientRouter)
router.use("/order", orderRouter)
router.use("currencyType", currencyType)
router.use("/admin", adminRouter);
router.use("/operation", operationRouter);
router.use("/status", statusRouter);

export default router