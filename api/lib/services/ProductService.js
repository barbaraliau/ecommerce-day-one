var ProductModel = require('./../models/products'),
								q = require('q')

 module.exports.create = function(product){
 	var dfd = q.defer();
  ProductModel(product).save(function(err, res){
 		if(!err){
 			dfd.resolve(res)
 		} else {
 			dfd.reject(err);
 		}
 	})
 	return dfd.promise
 };


module.exports.get = function(query){
	var deferred = q.defer();
	ProductModel.find(query, function(err, response){
		if(!err) {
			deferred.resolve(response)
		} else {
			deferred.reject(err);
		}
	})
	return deferred.promise
}