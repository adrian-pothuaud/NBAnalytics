var mongoose = require('mongoose');

//Import schema
var GameSchema = require('../schemas/Game.js');

//Create model from schema
var GameModel = mongoose.model('Game', GameSchema);

module.exports = GameModel;