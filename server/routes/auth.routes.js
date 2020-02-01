import express from "express";

import {
  signup,
  login,
  logout,
  logoutAll
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/user/signup", signup);
router.post("/user/login", login);
router.post("/user/logout", logout);
router.post("/user/logout/all", logoutAll);

export default router;
