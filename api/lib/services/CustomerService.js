var CustomerModel = require('./../models/customers'),
								q = require('q')

 module.exports.create = function(customer){
 	var dfd = q.defer();
 	CustomerModel(customer).save(function(err, res){
 		if(!err){
 			dfd.resolve(res)
 		} else {
 			dfd.reject(err);
 		}
 	})
 	return dfd.promise
 }

 module.exports.get = function(query){
	var deferred = q.defer();
	CustomerModel.find(query, function(err, response){
		if(!err) {
			deferred.resolve(response)
		} else {
			deferred.reject(err);
		}
	})
	return deferred.promise
}

 module.exports.getCustomer = function(param){
	var deferred = q.defer();
	CustomerModel.findOne({_id: param}, function(err, response){
		if(!err) {
			deferred.resolve(response)
		} else {
			deferred.reject(err);
		}
	})
	return deferred.promise
}

	// module.exports.deleteCustomer = function(param){
	// 	var deferred = q.defer();
	// 	CustomerModel.findOne({_id: param}).remove().exec(), function(err){
	// 			if(!err) {
	// 				deferred.resolve('Customer deleted')
	// 			} else {
	// 				deferred.reject(err);
	// 			}
	// 		}
	// 		return deferred.promise
	// 	}

