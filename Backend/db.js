import mongoose from "mongoose";
import "dotenv/config";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.log(err));

const usc = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: [25, "You can take the name up to 25 chars only"],
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    message: {
      type: String,
      required: true,
      maxLength: [255, "You can give message up to 255 chars"],
    },
  },
  {
    timestamps: true,
  },
);

export const userModel = mongoose.model("ClientData", usc);
