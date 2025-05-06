import express from "express";
import mongoose from "mongoose";
import config from "config";
import errorHandler from "./middlewares/errorHandler.js";
import indexRouter from "./routers/index.js";

const app = express();
const PORT = config.get("port") || 8080
console.log(config.get("dbUri"));

app.use(express.json());
app.use("/api", indexRouter);
app.use(errorHandler);

(async function start(){
    try {
        await mongoose.connect(config.get("dbUri"))
        app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))
    } catch (error) {
        console.error("error connext db");
        process.exit(1)
    }
})()
