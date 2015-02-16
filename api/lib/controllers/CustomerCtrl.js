var CustomerService = require('./../services/CustomerService')

module.exports.post = function(req, res){
	CustomerService.create(req.body)
		.then(function(response){
			res.status(200).json(response);
		}, function(err){
			res.status(400).json(err)
		})
}

module.exports.get = function(req, res){
	CustomerService.get(req.body)
	.then(function(response){
			res.status(200).json(response);
	}, function(err){
			res.status(400).json(err);
	})
}

module.exports.getCustomer = function(req, res){
	CustomerService.getCustomer(req.params.id)
	.then(function(response){
		res.status(200).json(response);
	}, function(err){
		res.status(400).json(err)
	})
}

// module.exports.deleteCustomer = function(req, res){
// 	CustomerService.deleteCustomer(req.params.id)
// 	.then(function(){
// 		console.log('Customer deleted')
// 	})
// }

