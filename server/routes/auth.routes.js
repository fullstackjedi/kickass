import express from 'express';
import User from '../models/user.schema.js';

const router = express.Router();

router.post('/auth/user/signup', async (req, res, next) => {
  const { firstName, lastName, username, email, password, confirmPassword } = req.body;

  const user = await User.create({
    name: {
      firstName,
      lastName,
    },
    userName,
    email,
    password,
    confirmPassword
  });

  res.status(201).json({
    status: 'success',
    data: {
      user
    }
  })
})