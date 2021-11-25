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

const updateUserProfile = async req => {
  try {
    // **************** validate before update !!! ****************
    const user = await User.findByIdAndUpdate(
      { _id: req.user._id },
      {
        $set: {
          ...req.body.data
        }
      },
      { new: true }
    );
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findUserByEmail,
  findUserById,
  updateUserProfile
};
