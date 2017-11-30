var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    PlayerId:  Number,
    PlayerName: String
});