var DAOFactory = require('./factoryDAO');
var UserBO = require('../business/userBO');
var JWTHelper = require('../helpers/jwtHelper');
var ModelHelper = require('../helpers/modelHelper');
var CryptoHelper = require('../helpers/cryptoHelper');
var FormPayment = require('../business/formPaymentBO');
var jwtHelper = new JWTHelper();


function factory(business){
    switch (business){
        case 'user':
            return new UserBO({
                userDAO: DAOFactory.getDAO('user'),
                jwtHelper: jwtHelper,
                modelHelper: ModelHelper,
                cryptoHelper: CryptoHelper
            });
        case 'formPayment':
            return new FormPayment({});
    }
}

module.exports = {getBO: factory};
