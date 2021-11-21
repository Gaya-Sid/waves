const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const auth = require("../middleware/auth");

//api/auth/register
router.post("/register", authController.register);

//api/auth/signin
router.post("/signin", authController.signIn);

router.get("/isauth", auth(), authController.isauth);

module.exports = router;
