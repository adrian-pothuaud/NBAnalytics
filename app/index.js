var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nbanalytics', function(err) {
    if (err) { throw err; }
    console.log("You are connected to the data !");
});