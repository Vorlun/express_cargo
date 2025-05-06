import { Schema, model } from "mongoose";

const operationSchema = new Schema(
  {
    order_id: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    status_id: { type: Schema.Types.ObjectId, ref: "Status", required: true },
    operation_date: { type: Date, required: true },
    admin_id: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
    description: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export default model("Operation", operationSchema);
