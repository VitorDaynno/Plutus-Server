var mongoose = require('mongoose');

var model = null;

module.exports = function () {

    var formPayment = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        userId:{
            type: String,
            required: true,
            ref: 'Users'
        },
        isEnabled: {
            type: Boolean,
            required: true
        }
    });

    model = model ? model : mongoose.model('FormPayment', formPayment);

    return model;
};
