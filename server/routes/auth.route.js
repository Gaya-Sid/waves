const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

//api/auth/register
router.post("/register", authController.register);

//api/auth/signin
router.post("/signin", authController.signIn);

//api/auth/signin
router.get("/isauth", authController.isauth);

module.exports = router;
