import { Schema, model } from "mongoose";

const clientSchema = new Schema(
  {
    full_name: { type: String, required: true, trim: true },
    phone_number: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
  },
  { timestamps: true, versionKey: false }
);

export default model("Client", clientSchema);
