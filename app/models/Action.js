var mongoose = require('mongoose');

//Import schema
var ActionsSchema = require('../schemas/Action.js');

//Create model from schema
var ActionModel = mongoose.model('action', ActionsSchema);

module.exports = ActionModel;

