var mongoose = require('mongoose');
var Action = require("../app/models/Action");

var assert = require('assert');

describe("Action Model", function() {

    before(function(done) {
        mongoose.connect(
            "mongodb://owner:esilv123@ds123946.mlab.com:23946/nbanalytics", 
            {useMongoClient: true}
        );
        mongoose.connection.once('open', function() {
            done();
        })
        .on('error', function() {
            console.warn('Error', error);
        })
    })

    it("can list existing actions", function(done) {

        Action.find({}, function(err, actions){
            if (err) return console.error(err);
            assert.notEqual(actions.length, 0);
            done();
        })
    });

    it("can add a new action", function(done) {

        var actionX = new Action();
        actionX.save(function(err, action) {
            if (err) return console.error(err);
            done();
        })
    })
})