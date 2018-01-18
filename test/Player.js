var mongoose = require('mongoose');
var Player = require("../app/models/Player");

var assert = require('assert');

describe("Player Model", function() {

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

    it("can list existing players", function(done) {

        Player.find({}, function(err, players){
            if (err) return console.error(err);
            assert.notEqual(players.length, 0);
            done();
        })
    });

    it("can add a new player", function(done) {

        var playerX = new Player();
        playerX.save(function(err, player) {
            if (err) return console.error(err);
            done();
        })
    })
})