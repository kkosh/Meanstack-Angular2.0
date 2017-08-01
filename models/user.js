const mongoose = require('mongoose');
const config = require('../config/database');


// User schema
const UserSchema  = mongoose.Schema({

  name: { type: String },
  email: { type: String, required: true },
  username: {type: String, required: true},
  password: {type: String, required: true}

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, cb) {
  User.findById(id, cb);
}

module.exports.getUserByUsername = function(username, cb) {
  const query = { username: username }
  User.findOne(query, cb);
}

module.exports.addUser = function(newUser, cb) {
  newUser.save(cb);
}
