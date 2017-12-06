var mongoose = require('mongoose');

//Import schema
var PlayerSchema = require('../schemas/Player.js');

//Create model from schema
var PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports = PlayerModel;