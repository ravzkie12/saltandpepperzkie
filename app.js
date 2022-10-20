const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const path = require('path');

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
const dbURI = 'mongodb+srv://ravzkie12:L4TkyHnmSJ8TkHLW@cluster1.il2cl8b.mongodb.net/'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(process.env.PORT || 3000, () => console.log('Server is running and DB Connected UWU xd:3000')))
  .catch((err) => console.log(err))

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/quintuplets', requireAuth, (req, res) => res.render('quintuplets'));
app.use(authRoutes)
