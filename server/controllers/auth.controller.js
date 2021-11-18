const { authService } = require("../services");

const authController = {
  async isauth() {
    const hello = await authService.sayHello();
    console.log(hello);
  },
  async register() {
    try {
    } catch (error) {}
  },
  async signIn() {
    try {
    } catch (error) {}
  }
};

module.exports = authController;
