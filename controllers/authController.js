const User = require('../models/User');
const jwt = require('jsonwebtoken');

// error handler
const handleErrors = (err) => {
  // console.log(err.message, err.code);
  let errors = { username: '', password: '' };

  // handle errors for the login
  if (err.message === 'incorrect username and/or password') {
    errors.username = err.message;
    errors.password = err.message;
  }

  // incorrect password
  // if (err.message === 'incorrect password') {
  //   errors.password = 'That password is incorrect';
  // }

  // duplicate error code
  if (err.code === 11000) {
    errors.username = 'That username is already registered';
  }

  //validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
}
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'IchiNiMiYotsuItsu', {
    expiresIn: maxAge
  })
}

module.exports.signup_get = (req, res) => {
  res.render('signup');
}

module.exports.login_get = (req, res) => {
  res.render('login');
}

module.exports.signup_post = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.create({ username, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

module.exports.login_post = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}