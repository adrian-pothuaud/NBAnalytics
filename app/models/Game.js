var mongoose = require('mongoose');
import GameSchema from 'Game';

var Game = mongoose.model('Game', GameSchema);

module.exports = Game;