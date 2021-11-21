const { User } = require("../models/user");
const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");

const createUser = async (email, password) => {
  try {
    if (await User.emailTaken(email)) {
      console.log("user already exists");
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

module.exports = {
  createUser,
  generateAuthToken
};
