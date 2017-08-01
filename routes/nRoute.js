const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const config = require('../config/database');

const User = require('../models/user');



router.post('/register', (req, res, next) => {

  // res.send('Register');
  let newUser = new User({

          name: req.body.name,
          email: req.body.email,
          username: req.body.username,
          password: req.body.password

  });

  User.addUser(newUser, (err, user) => {

        if (err) {
            res.json({ result: false, msg: 'Please try again' });
        }
        else {
          res.json({ result: true, msg: 'User registerd' });
        }
  });
});

router.post('/authenticate', (req, res, next) => {

  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
      if (err) {
        throw err;
      }

      if (!user) {
        return res.json({result: false, msg: 'user not found!!!'});
      }

        if (password == user.password) {
          const token = jwt.sign(user, config.secret, {
            expiresIn: '10h'
          });

          res.json({
            success: true,
            token: 'JWT '+token,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            }
          });


        } else {
          return res.json({success:false, msg: 'Wrong password'});
        }

    });
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
