const { User } = require("../models/user");
const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");

const findUserByEmail = async email => {
  try {
    return User.findOne({ email });
  } catch (error) {
    throw error;
  }
};

const findUserById = async _id => {
  try {
    return User.findById(_id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findUserByEmail,
  findUserById
};
