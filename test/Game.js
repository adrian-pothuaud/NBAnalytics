var mongoose = require('mongoose');
var Game = require("../app/models/Game");

var assert = require('assert');

describe("Game Model", function() {

    before(function(done) {
        mongoose.connect(
            "mongodb://owner:esilv123@ds123946.mlab.com:23946/nbanalytics", 
            {useMongoClient: true}
        );
        mongoose.connection.once('open', function() {
            done();
        })
        .on('error', function(error) {
            console.warn('Error', error);
        })
    })

    it("can list existing games", function(done) {

        Game.find({}, function(err, games){
            if (err) return console.error(err);
            assert.notEqual(games.length, 0);
            done();
        })
    });

    it("can add a new game", function(done) {

        var gameX = new Game();
        gameX.save(function(err, game) {
            if (err) return console.error(err);
            done();
        })
    })
    
    it("can update a game", function(done) {
        
        Game.update({"GameId": {$exists:false}}, { $set: { "GameId": 123456789 }}, {}, done())
    })
    
    it("can delete games", function(done) {
        
        Game.find( { $or: [{ "GameId": 123456789 }, {"GameId": {$exists:false}}]}).remove().exec(function(err, data) {
            if (err) return console.error(err);
            done();
        });
    })
})