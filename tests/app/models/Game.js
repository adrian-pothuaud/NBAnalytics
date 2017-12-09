var mongoose = require('mongoose');
var GameModel = require('../../../app/models/Game');

// connect to db
// *** LOCAL ***
// mongoose.connect('mongodb://localhost/myapp');
// *** MLAB ***
mongoose.connect('mongodb://root:esilv123@ds123946.mlab.com:23946/nbanalytics', {
    useMongoClient: true
});
console.log('Connected to DB');

// find Actions and print to console
GameModel.find({}, function(err, games) {
    if (err) throw (err);
    console.log(games);
});
