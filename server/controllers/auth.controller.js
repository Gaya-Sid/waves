const { authService } = require("../services");
const httpStatus = require("http-status");

const authController = {
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await authService.createUser(email, password);
      const token = await authService.generateAuthToken(user);

      // send register email

      res
        .cookie("x-access-token", token)
        .status(httpStatus.CREATED)
        .json({
          user,
          token
        });
    } catch (error) {
      next(error);
    }
  },
  async signIn(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await authService.signInWithEmailAndPassword(
        email,
        password
      );

      const token = await authService.generateAuthToken(user);

      res
        .cookie("x-access-token", token)
        .status(httpStatus.OK)
        .json({
          user,
          token
        });
    } catch (error) {
      next(error);
    }
  },
  async isauth(req, res, next) {
    try {
      res.send(req.user);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = authController;
