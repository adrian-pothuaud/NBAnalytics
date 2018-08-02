var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passwordHash = require('password-hash');

var UserSchema = new Schema({
    email:  { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    role: { type: String, default: 'owner' },
});

UserSchema.pre('save', function(next) {
    if(!this.isModified()){
        //not modified
        next()
    }
    this.password = passwordHash.generate(this.password);
    next();
});

module.exports = UserSchema;