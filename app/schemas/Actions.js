var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActionsSchema = new Schema({
    GameId:  Number,
    TeamId: Number,
    PlayerId: Number,
    Minutes: Number,
    FieldGoalsMade: Number,
    FieldGoalAttempts: Number,
    ThreePointsMade: Number,
    ThreePointAttempts: Number,
    FreeThrowsMade: Number,
    FreeThrowAttempts: Number,
    PlusMinus: Number,
    OffensiveRebounds: Number,
    DefensiveRebounds: Number,
    TotalRebounds: Number,
    Assists: Number,
    PersonalFouls: Number,
    Steals: Number,
    Turnovers: Number,
    BlockedShots: Number,
    BlocksAgainst: Number,
    Points: Number,
    Starter: Number
 });