import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    firstName: {
      type: String,
      required: [true, 'Firstname is required']
    },
    lastName: {
      type: String,
      required: [true, 'Lastname is required']
    }
  },
  userName: {
    type: String,
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  confirmPassword: {
    type: String,
    required: [true, 'Confirm password is required']
  }
})

export default mongoose.model('User', userSchema);
