const mongoose = require("mongoose");
const { ObjectId } = require("mongoose");
const PasswordHasher = require("../services/PasswordHasher");

const userSchema = new mongoose.Schema(
  {
    name: {
      String,
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    tasks: [
      {
        type: ObjectId,
        ref: "Task",
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await PasswordHasher.toHash(this.get("password"));
    this.set("password", hashed);
  }
});
const User = mongoose.model("User", userSchema);

module.exports = User;
