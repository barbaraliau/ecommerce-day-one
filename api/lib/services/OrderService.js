var OrderModel = require('./../models/orders'),
								q = require('q')

 module.exports.create = function(order){
 	var dfd = q.defer();
 	OrderModel(order).save(function(err, res){
 		if(!err){
 			dfd.resolve(res)
 		} else {
 			dfd.reject(err);
 		}
 	})
 	return dfd.promise
 }