var ActionModel = require("../models/Action");

module.exports = {
    List: function(handler) {
        ActionModel.find({}, function(err, actions) {
            if (err) throw err;
            handler(actions);
        })
    }
}