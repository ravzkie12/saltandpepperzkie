const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const path = require('path');
require('dotenv').config();
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// scripts
app.use(express.static(path.join(__dirname, 'app')));

// database connection
const dbURI = process.env.MONGO_URL_DEV;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(process.env.PORT || 3000, () => console.log('Server is running and DB Connected UWU xd:3000')))
  .catch((err) => console.log(err))

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/quintuplets', requireAuth, (req, res) => res.render('quintuplets'));
app.use(authRoutes)
