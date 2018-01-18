var ActionModel = require("../models/Action");

module.exports = {
    List: function() {
        ActionModel.find({}, function(err, actions) {
            if (err) throw err;
            return actions;
        })
    }
}