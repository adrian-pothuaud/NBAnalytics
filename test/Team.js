var mongoose = require('mongoose');
var Team = require("../app/models/Team");

var assert = require('assert');

describe("Team Model", function() {

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

    it("can list existing teams", function(done) {

        Team.find({}, function(err, teams){
            if (err) return console.error(err);
            assert.notEqual(teams.length, 0);
            done();
        })
    });

    it("can add a new team", function(done) {

        var teamX = new Team();
        teamX.save(function(err, team) {
            if (err) return console.error(err);
            done();
        })
    })
    
    it("can update a team", function(done) {
        
        Team.update({"TeamId": {$exists:false}}, { $set: { "TeamId": 123456789 }}, {}, done())
    })
    
    it("can delete teams", function(done) {
        
        Team.find( { $or: [{ "TeamId": 123456789 }, {"TeamId": {$exists:false}}]}).remove().exec(function(err, data) {
            if (err) return console.error(err);
            done();
        });
    })
})