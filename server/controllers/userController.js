const bcrypt = require('bcrypt');
const os = require('os')
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
const generateToken = id => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    res.status(404).json({
      message: 'User not found'
    })
    throw new Error('User not found')
  }

  if (user && (await user.correctPassword(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      isAdmin: user.isAdmin
    })
  } else {
    res.status(401).json({
      message: 'Invalid email or password'
    })
    throw new Error('Invalid user email or password')
  }
})



const signup = asyncHandler(async (req, res) => {
  const { username, email, password, confirmPassword, isAdmin } = req.body
  let userExists = await User.findOne({ email: email })

  if (userExists) {
    res.status(400)
    res.json({
      message: 'User already exists'
    })
    throw new Error('User already exists')
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const networkInterfaces = os.networkInterfaces();
  let ipAddress;

  Object.keys(networkInterfaces).forEach((interface) => {
    networkInterfaces[interface].forEach((netInterface) => {
      // check for IPv4 and not internal network
      if (netInterface.family === 'IPv4' && !netInterface.internal) {
        ipAddress = netInterface.address;
      }
    });
  });
  console.log(ipAddress);
  const user = new User({
    name: username,
    email: email,
    password: hashPassword,
    verified: false,
    ipAddress: ipAddress,
    isAdmin: isAdmin
  })

  const OTP = generateOtp();
  const verificationToken = new Token({
    owner: user._id,
    token: OTP
  })
  console.log("otp:", OTP)

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
        verified: user?.verified,
        password: hashPassword,
        ipAddress: ipAddress,
        isAdmin: isAdmin
      },
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    res.json({
      message: 'Invalid user data'
    })
    throw new Error('Invalid user data')
  }
})

const forgotPassword = async (req, res, next) => {
  // get user based on email
  const { email } = req.body;
  if (!email) {
    res.json({
      message: 'Provide valid email id'
    })
  }
  const user = await User.findOne({ email: email })

  if (!user) {
    throw new Error('No user found with this is email id', 404)
  }
  next();
  // genrate the random token
  const resetToken = user.createPasswordResetToken();
  await user.save({ vaidateBeforeSave: false })
  // send back to user's mail

}


const resetPassword = async (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  const { email, password } = req.body;

  try {
    // See if user exists
    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'User does not exist' }] });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user._id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
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
    res.json({
      message: 'User not found'
    })
    throw new Error('User not found')
  }
})


const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: new mongoose.Types.ObjectId(req.user._id) })
  if (user) {
    user.name = req.body.username || user.username
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const OTP = generateOtp();
    const verificationToken = new Token({
      owner: user._id,
      token: OTP
    })
    console.log("otp:", OTP)

    await verificationToken.save();
    const updatedUser = await user.save()

    mailTransport().sendMail({
      from: 'emailverification@gmail.com',
      to: user.email,
      subject: 'Update email',
      html: `<p>Please verify mail to update email</p><h1>${ OTP }</h1>`
    })
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
  const user = await User.findById(req.params.id);
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

    const OTP = generateOtp();
    const verificationToken = new Token({
      owner: user._id,
      token: OTP
    })
    console.log("otp:", OTP)

    await verificationToken.save();
    const updatedUser = await user.save()

    mailTransport().sendMail({
      from: 'emailverification@gmail.com',
      to: user.email,
      subject: 'Update email',
      html: `<p>Please verify mail to update email</p><h1>${ OTP }</h1>`
    })

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
  const { otp, userId } = req.body;
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

const postHistory = async (req, res) => {
  try {

  }
  catch (err) {
    res.status(500).json(
      {
        message: 'Failed to add history'
      }
    )
  }
}

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({ isAdmin: false });
    res.status(200).json({
      status: 'success',
      user
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err
    });
  }
};




module.exports = {
  signin,
  signup,
  updateUser,
  deleteUser,
  updateUserProfile,
  getUserProfile,
  forgotPassword,
  resetPassword,
  verifyEmail,
  getAllUsers
}

