var mongoose = require('mongoose');
import ActionsSchema from 'Actions';

var Actions = mongoose.model('Actions', ActionsSchema);

module.exports = Actions;