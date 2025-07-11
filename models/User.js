const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: {
      publicId: String,
      url: String,
      thumbnailUrl: String,
    },
    role: { type: String, enum: ["admin", "member"], default: "member" }, // Role-based access
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
