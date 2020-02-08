import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "Firstname is required"],
    trim: true
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required"],
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: value => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Invalid Email Address" });
      }
    }
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 7,
    select: false
  },
  confirmPassword: {
    type: String,
    select: false
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

userSchema.pre("save", async function(next) {
  const user = this;
  // Run only when password was modified
  if (user.isModified("password")) {
    if (user.password !== user.confirmPassword) {
      throw new Error({ error: "Password does not match" });
    }
    user.password = await bcrypt.hash(user.password, 8);
    user.confirmPassword = null;
  }
});

userSchema.methods.generateAuthToken = async function() {
  // Generate token for the user
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.methods.removeSensitiveData = function() {
  const user = this.toObject();
  delete user.password;
  delete user.tokens;
  return user;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({
    $or: [{ email: email }, { username: email }]
  }).select("+password");

  if (!user) {
    throw new Error("Invalid login details");
  }
  console.log(user);

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Invalid login details");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

export default User;
