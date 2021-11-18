const { authService } = require("../services");

const authController = {
  async hello() {
    const hello = await authService.sayHello();
    console.log(hello);
  }
};

module.exports = authController;
