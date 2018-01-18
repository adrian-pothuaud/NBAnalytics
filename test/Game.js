var mongoose = require('mongoose');
var Game = require("../app/models/Game");

var assert = require('assert');

describe("Game Model", function() {

    before(function(done) {
        mongoose.connect(
            "mongodb://localhost/nbanalytics", 
            {useMongoClient: true}
        );
        mongoose.connection.once('open', function() {
            done();
        })
        .on('error', function() {
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
})