import { Schema, models, model } from "mongoose";
import { LoginConfig } from "types";

export const LoginSchema = new Schema<LoginConfig>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default models.users || model("users", LoginSchema);
