const { authService } = require("../services");

const authController = {
  async isauth() {},
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await authService.createUser(email, password);
      const token = await authService.generateAuthToken(user);
      res
        .cookie("x-access-token", token)
        .status(200)
        .json({
          user,
          token
        });
    } catch (error) {
      console.log(error);
    }
  },
  async signIn() {
    try {
    } catch (error) {}
  }
};

module.exports = authController;
