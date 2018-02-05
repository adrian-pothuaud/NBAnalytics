var mongoose = require('mongoose');
var User = require("../app/models/User");
var passwordHash = require('password-hash');

var assert = require('assert');

describe("User Model", function() {

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
        });
    });

    it("can list existing users", function(done) {

        User.find({}, function(err, actions){
            if (err) return console.error(err);
            assert.notEqual(actions.length, 0);
            done();
        });
    });

    it("can add a new user", function(done) {

        var userX = new User({
            "email": "test@test.test",
            "password": "test123"
        });
        userX.save(function(err, user) {
            if (err) return console.error(err);
            done();
        });
    });
    
    it("can hash password", function(done) {

        var userX = new User({
            "email": "test2@test.test",
            "password": "test123"
        });
        userX.save(function(err, user) {
            if (err) return console.error(err);
            assert(passwordHash.verify("test123", user.password), "User password not correct");
            done();
        });
    });
    
    it("can update a user", function(done) {
        
        User.update({"email": {$exists:false}}, { $set: { "email": "test@test.test" }}, {}, done());
    });
    
    it("can delete users", function(done) {
        
        User.find( { $or: [{ "email": "test@test.test" }, { "email": "test2@test.test" },{"email": {$exists:false}}]}).remove().exec(function(err, data) {
            if (err) return console.error(err);
            done();
        });
    });
})