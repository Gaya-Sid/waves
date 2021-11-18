const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

//api/auth/...
router.get("/hello", authController.hello);

module.exports = router;