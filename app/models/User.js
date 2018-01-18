var mongoose = require('mongoose');

//Import schema
var UserSchema = require('../schemas/User.js')

//Create model from schema
var UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;