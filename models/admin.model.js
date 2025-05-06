import { Schema, model } from "mongoose";

const adminSchema = new Schema(
  {
    full_name: { type: String, required: true },
    user_name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_number: { type: String },
    email: { type: String },
    tg_link: { type: String },
    token: { type: String },
    is_creator: { type: Boolean, default: false },
    is_active: { type: Boolean, default: true },
    description: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export default model("Admin", adminSchema);
