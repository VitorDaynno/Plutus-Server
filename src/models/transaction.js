var mongoose = require('mongoose');

var model = null;

module.exports = function () {

    var transaction = mongoose.Schema({
        description: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        categories: [{
            type: String,
            required: true
        }],
        purchaseDate: {
            type: Date,
            required: true
        },
        account: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Account'
        },
        installments: {
            type: Number,
            required: false
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Users'
        },
        creationDate: {
            type: Date,
            required: true
        },
        modificationDate: {
            type: Date,
            required: false
        },
        exclusionDate: {
            type: Date,
            required: false
        },
        isEnabled: {
            type: Boolean,
            required: true
        }
    });

    model = model ? model : mongoose.model('Transaction', transaction);

    return model;
};
