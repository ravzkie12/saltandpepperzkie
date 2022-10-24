const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const saltRounds = 13;
const PEPPER = process.env.PEPPER;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter a username'],
    unique: true,
    validate: [(val) => {
      return val.length > 3;
    }, 'Username must be at least 4 characters long']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  }
});
// fire a function before doc saved to db
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(saltRounds);
  const peppyPassword = this.password + PEPPER;
  this.password = await bcrypt.hash(peppyPassword, salt);
  next();
})

// fire a function after doc saved to db
userSchema.post('save', function (doc, next) {
  console.log('new user was created and saved', doc);
  next();
})

// static method to login user
userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  if (user) {
    const peppyPassword = password + PEPPER;
    const auth = await bcrypt.compare(peppyPassword, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect username and/or password');
  }
  throw Error('incorrect username and/or password');
}

const User = mongoose.model('user', userSchema);

module.exports = User;