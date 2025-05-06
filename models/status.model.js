import { Schema, model } from "mongoose";

const statusSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export default model("Status", statusSchema);
