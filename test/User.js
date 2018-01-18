// var mongoose = require('mongoose');
// var User = require("../app/models/User");

// var assert = require('assert');

// describe("User Model", function() {

//     before(function(done) {
//         mongoose.connect(
//             "mongodb://owner:esilv123@ds123946.mlab.com:23946/nbanalytics", 
//             {useMongoClient: true}
//         );
//         mongoose.connection.once('open', function() {
//             done();
//         })
//         .on('error', function() {
//             console.warn('Error', error);
//         })
//     })

//     it("can list existing users", function(done) {

//         User.find({}, function(err, users){
//             if (err) return console.error(err);
//             assert.notEqual(users.length, 0);
//             done();
//         })
//     });

//     it("can add a new user", function(done) {

//         var userX = new User({
//             "email": "test@gmail.com",
//             "password": "thisisaP@@sswor!"
//         });
//         userX.save(function(err, user) {
//             if (err) return console.error(err);
//             done();
//         })
//     })

//     it("hash password for new user", function(done) {

//         var testPassword = "thisisaP@@sswor!";
//         var userX = new User({
//             "email": "test@gmail.com",
//             "password": testPassword
//         });
//         userX.save(function(err, user) {
//             if (err) return console.error(err);
//             assert.notEqual(testPassword, user.password);
//             done();
//         })
//     })
// })