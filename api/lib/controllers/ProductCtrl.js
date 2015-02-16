var ProductService = require('./../services/ProductService')

module.exports.post = function(req, res){
	ProductService.create(req.body)
		.then(function(response){
			res.status(200).json(response);
		}, function(err){
			res.status(400).json(err)
		})
}

module.exports.get = function(req, res){
	ProductService.get(req.body)
	.then(function(response){
			res.status(200).json(response);
	}, function(err){
			res.status(400).json(err);
	})
}