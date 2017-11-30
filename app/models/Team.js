var mongoose = require('mongoose');
import TeamSchema from 'Team';

var Team = mongoose.model('Team', TeamSchema);

module.exports = Team;