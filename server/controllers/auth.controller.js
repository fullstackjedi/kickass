import User from "../models/user.schema.js";

export const signup = async (req, res) => {
  const {
    firstname,
    lastname,
    username,
    email,
    password,
    confirmPassword
  } = req.body;

  console.log(req.body);

  const user = await User.create({
    name: {
      firstname,
      lastname
    },
    username,
    email,
    password,
    confirmPassword
  });

  const token = await user.generateAuthToken();

  delete user.password;
  delete user.confirmPassword;
  delete user.tokens;

  res.status(201).json({
    status: "success",
    data: {
      user,
      token
    }
  });
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findByCredentials(username, password);
  if (!user) {
    return res
      .status(401)
      .send({ error: "Login failed! Check authentication credentials" });
  }
  const token = await user.generateAuthToken();
  res.json({
    status: "success",
    data: {
      user,
      token
    }
  });
};

export const logout = async (req, res) => {
  // Log user out of the application
  req.user.tokens = req.user.tokens.filter(token => {
    return token.token != req.token;
  });

  await req.user.save();

  res.send();
};

export const logoutAll = async (req, res) => {
  // Log user out of all devices
  req.user.tokens.splice(0, req.user.tokens.length);

  await req.user.save();

  res.send();
};
