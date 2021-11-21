const { User } = require("../models/user");
const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");
const userService = require("./user.service");

const createUser = async (email, password) => {
  try {
    if (await User.emailTaken(email)) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Sorry, email is already taken"
      );
    }
    const user = new User({
      email,
      password
    });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const generateAuthToken = async user => {
  const token = user.generateAuthToken(user);
  return token;
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    const user = await userService.findUserByEmail(email);
    if (!user) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "User not found, Please register"
      );
    }

    if (!(await user.comparePassword(password))) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect password");
    }

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  generateAuthToken,
  signInWithEmailAndPassword
};
