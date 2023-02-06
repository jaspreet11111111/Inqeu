const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { default: mongoose, isValidObjectId } = require('mongoose');
const Token = require('../models/token')
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid')
const nodemailer = require('nodemailer')
const path = require('path');
const { generateOtp } = require('../utils/email');
const { mailTransport } = require('../utils/email');
const { use } = require('../app');
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
  if (user && (await user.correctPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
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

  const user = new User({
    name: username,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    verified: false
  })

  const OTP = generateOtp();
  const verificationToken = new Token({
    owner: user._id,
    token: OTP
  })

  await verificationToken.save();
  await user.save();

  mailTransport().sendMail({
    from: 'emailverification@gmail.com',
    to: user.email,
    subject: 'Verification email',
    html: `<p>Please write this otp</p><h1>${ OTP }</h1>`
  })

  if (user) {
    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user?.email,
        verified: user?.verified
      },
      token: generateToken(user._id)
    })
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

const verifyEmail = async (req, res) => {
  const { userId, otp } = req.body;
  console.log(req.user._id)
  console.log(req.body)
  if (!userId || !otp.trim()) {
    res.status(400).json({
      message: 'Invalid'
    })
  }
  if (!isValidObjectId(userId)) {
    res.status(400).json({
      message: 'Invalid user id'
    })
  }
  const user = await User.findById(userId);
  console.log(user)
  if (!user) {
    res.status(500).json({
      message: 'Invalid user'
    })
  }

  if (user.verified) {
    res.status(400).json({
      message: 'user already verify'
    })
  }

  const token = await Token.findOne({ owner: user._id });
  if (!token) {
    res.status(500).json({
      message: 'Sorry user not found'
    })
  }

  const isMatched = await token.compareToken(otp);
  if (!isMatched) {
    res.status(500).json({
      message: 'please verify correct token'
    })
  }
  user.verified = true;

  await Token.findByIdAndDelete(token._id);
  await user.save();

  mailTransport().sendMail({
    from: 'emailverification@gmail.com',
    to: user.email,
    subject: 'Verification email',
    html: `Thank you for verifying mail`
  })

  res.status(201).json({
    message: 'Email verified',
    user: user
  })
}



module.exports = {
  signin,
  signup,
  updateUser,
  deleteUser,
  updateUserProfile,
  getUserProfile,
  forgotPassword,
  resetPassword, verifyEmail
}

