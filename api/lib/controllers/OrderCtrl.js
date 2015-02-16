var OrderService = require('./../services/OrderService')

module.exports.post = function(req, res){
	OrderService.create(req.body)
		.then(function(response){
			res.status(200).json(response);
		}, function(err){
			res.status(400).json(err)
		})
}