var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
    TeamId:  Number,
    TeamName: String
});

exports = TeamSchema;