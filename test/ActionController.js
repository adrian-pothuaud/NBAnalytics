// var mongoose = require('mongoose');
// var ActionController = require("../app/controllers/Action");

// var assert = require('assert');

// describe("Action Controller Model", function() {

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

//     it("can list existing actions", function(done) {

//         assert.notEqual(ActionController.List().length, 0);
//         done();
//     });
// })