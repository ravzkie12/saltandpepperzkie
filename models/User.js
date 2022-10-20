const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const PASSWORD_PEPPER = '8:¯|¯[]-[|\|16/-\(-)][|V4`';

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
  const salt = await bcrypt.genSalt(13);
  this.password = await bcrypt.hash(this.password + PASSWORD_PEPPER, salt);
  next();
})

// static method to login user
userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  if (user) {
    const auth = await bcrypt.compare(password + PASSWORD_PEPPER, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect username and/or password');
  }
  throw Error('incorrect username and/or password');
}

const User = mongoose.model('user', userSchema);

module.exports = User;