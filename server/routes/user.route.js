const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth");

//api/auth/register
router
  .route("/profile")
  .get(auth("readOwn", "profile"), userController.profile);

module.exports = router;
