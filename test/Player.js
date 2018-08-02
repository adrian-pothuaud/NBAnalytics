var mongoose = require('mongoose');
var Player = require("../app/models/Player");

var assert = require('assert');

describe("Player Model", function() {

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
    
    it("can update a player", function(done) {
        
        Player.update({"PlayerId": {$exists:false}}, { $set: { "PlayerId": 123456789 }}, {}, done())
    })
    
    it("can delete players", function(done) {
        
        Player.find( { $or: [{ "PlayerId": 123456789 }, {"PlayerId": {$exists:false}}]}).remove().exec(function(err, data) {
            if (err) return console.error(err);
            done();
        });
    })
})