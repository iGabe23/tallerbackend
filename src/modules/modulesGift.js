import { Schema, model } from "mongoose";

const schemaGift = new Schema(
  {
    recipient: { type: String, required: true },
    name: { type: String, required: true },
    delivered: { type: Boolean, required: true },
  },
  { versionKey: false, timestamps: true }
);

export default model("Gift", schemaGift);
