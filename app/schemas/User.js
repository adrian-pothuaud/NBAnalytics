var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new Schema({
    email:  String,
    password: String
});

UserSchema.pre('save', function(next) {
    // do stuff = hash password
    bcrypt.hash(this.password, 10, function(err, hash) {
        // Store hash in your password DB.
        this.password = hash;
        next();
    });
});

UserSchema.methods.checkPassword = function (tryThisPassword) {
    bcrypt.compare(tryThisPassword, this.password, function(err, res) {
        return res;
    });
};

module.exports = UserSchema;