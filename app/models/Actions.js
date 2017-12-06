var mongoose = require('mongoose');

//Import schema
var ActionsSchema = require('../schemas/Actions.js');

//Create model from schema
var ActionsModel = mongoose.model('Actions', ActionsSchema);

module.exports = ActionsModel;

