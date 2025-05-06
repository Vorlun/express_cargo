import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    order_unique_id: { type: String, required: true, unique: true },
    client_id: { type: Schema.Types.ObjectId, ref: "Client", required: true },
    product_link: { type: String, required: true },
    quantity: { type: Number, required: true },
    summa: { type: Number, required: true },
    currency_type_id: {
      type: Schema.Types.ObjectId,
      ref: "CurrencyType",
      required: true,
    },
    truck: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export default model("Order", orderSchema);
