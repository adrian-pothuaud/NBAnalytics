var mongoose = require('mongoose');
import PlayerSchema from 'Player';

var Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;