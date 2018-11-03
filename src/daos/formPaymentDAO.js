var logger = require('../config/logger')();

module.exports = function(dependencies) {
    var formPayment = dependencies.formPayment;

    return {
        dependencies: dependencies,

        save: function(entity) {
                return new Promise(function(resolve, reject){
                    logger.info('[FormPaymentDAO] Saving a form of payment in database: ' + JSON.stringify(entity));
                    formPayment.create(entity)
                        .then(function(formPayment){
                            logger.info('[FormPaymentDAO] The formPayment saved in database with id: ' + formPayment._id);
                            resolve(formPayment);
                        })
                        .catch(function(error){
                            logger.error('[FormPaymentDAO] An error occurred: ', error);
                            reject(error);
                        });
                });          
        },

        getById: function(id) {
            return new Promise(function(resolve, reject){
                logger.info('[FormPaymentDAO] Finding a form of payment by id ' + id);
                formPayment.findById(id)
                    .exec()
                    .then(function(formPayment) {
                        logger.info('[FormPaymentDAO] A form of payment returned: ' + JSON.stringify(formPayment));
                        resolve(formPayment);
                    })
                .catch(function(error){
                    logger.error('[FormPaymentDAO] An error occurred: ' + error);
                    if (error.name === 'CastError'){
                        reject({code: 422, message: error.message});
                    } else {
                        reject({code: 500, message: error.message});
                    };
                });
            });
        }        
    };
};