var mongoose = require('mongoose'); // npm package for MongoDB

mongoose.connect('mongodb://localhost/nbanalytics', function(err) { // db connection
    if (err) { throw err; } // connection error
    // Connected ! \\
    console.log("You are connected to the data !");
});