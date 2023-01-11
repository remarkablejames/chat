import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "please enter the firstname"],
      min: 2,
      max: 50,
    },
    lastname: {
      type: String,
      required: [true, "please enter the lastname"],
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: [true, "please enter the email"],
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: [true, "please enter the password"],
      min: 5,
      max: 50,
    },
    picturePath: { type: String, default: "" },
    friends: { type: Array, default: [] },
    location: String,
    occupation: String,
    viewedProfile: Number,
    joined: { type: Date, default: Date.now() },
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
