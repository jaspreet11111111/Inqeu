const { promisify } = require('util');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { default: mongoose } = require('mongoose');
const Token = require('../models/token')
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');


const generateToken = id => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}



const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email }).select('+password');
  console.log("user:", user);

  if (user) {
    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token: generateToken(user._id),
    })
  }
  if (!user.isVerified) {
    let token = await new Token({
      // userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    const message = `${ process.env.BASE_URL }api/v1/user/verify/${ user._id }/${ token.token }`;
    await sendEmail(user.email, "Verify Email", message);

    res.json({ message: "An Email sent to your account please verify" });
  }
  else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

const signup = asyncHandler(async (req, res) => {
  const { username, email, password, confirmPassword } = req.body
  let userExists = await User.findOne({ email: email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  userExists = await User.create({
    name: username,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  })

  if (userExists) {
    res.status(201).json({
      user: {
        _id: userExists._id,
        name: userExists.name,
        email: userExists.email,
      },
      token: generateToken(userExists._id)
    })

    let token = await new Token({
      userId: userExists._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    const message = `${ process.env.BASE_URL }api/v1/user/verify/${ userExists.id }/${ token }`;
    await sendEmail(userExists.email, "Verify Email", message);

    res.send("An Email sent to your account please verify");
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

const forgotPassword = asyncHandler(async (req, res, next) => {
  // get user based on email
  const user = await User.findOne({ email: req.body.email })

  if (!user) {
    throw new Error('No user found with this is email id', 404)
  }
  next();
  // genrate the random token
  const resetToken = user.createPasswordResetToken();
  await user.save({ vaidateBeforeSave: false })
  // send back to user's mail

})
const resetPassword = (req, res, next) => {

}

const verifyEmail = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send("Invalid link");

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link");

    await User.updateOne({ _id: user._id, verified: true });
    await Token.findByIdAndRemove(token._id);

    res.send("email verified sucessfully");
  } catch (error) {
    res.status(400).send("An error occured");
  }
}
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  console.log(req)
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: new mongoose.Types.ObjectId(req.user._id) })
  console.log("user", req)
  if (user) {
    user.name = req.body.username || user.username
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()
    console.log(updatedUser)
    res.json({
      user: {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email
      },
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  console.log(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

module.exports = {
  signin,
  signup,
  updateUser,
  deleteUser,
  updateUserProfile,
  getUserProfile,
  forgotPassword,
  resetPassword,
  verifyEmail
}

