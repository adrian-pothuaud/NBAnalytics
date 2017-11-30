var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
    GameId:  Number,
    Team1Id: Number,
    Team2Id: Number,
    ResultOfTeam1: Number,
    URL: String,
    Date: Date
});