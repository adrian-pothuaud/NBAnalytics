var mongoose = require('mongoose');

//Import schema
var TeamSchema = require('../schemas/Team.js')

//Create model from schema
var TeamModel = mongoose.model('Team', TeamSchema);

module.exports = TeamModel;