const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    // required: [true, 'Must have username']
  },
  email: {
    type: String,
    required: [true, 'Must have email'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Must have password'],
    minlength: 8,
    select: false
  },
  confirmPassword: {
    type: String,
    // required: [true, 'Must have password'],
    minlength: 8,
    validate: {
      validator: function(e) {
        return e === this.password
      }
    }
  },
  passwordChangedAt: {
    Date
  },
  id: {
    type: String
  }
})

userSchema.pre('save', async function(next) {
  // only run this function if passwprd is modified
  if (!this.isModified('password')) return next();

  this.password === await bcrypt.hash(this.password, 12);
  // delete confirm password
  this.confirmPassword = undefined;
  next();

})

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changePasswordAfter = function(JWT_timestapms) {

  if (this.passwordChangedAt) {
    console.log(this.passwordChangedAt, JWT_timestapms);
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);

    return JWT_timestapms < changedTimestamp

  }
  return false
}
const User = mongoose.model('User', userSchema);
module.exports = User