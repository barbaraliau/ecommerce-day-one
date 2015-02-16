var Product = require('./../models/products'),
			require('./../server')

exports.up = function(next){
	var watch = new Product({
		name: 'Rolex Watch',
		description: 'Super expensive watch',
		price: 10000,
		active: 'Active'
	});
	watch.save(function(err){
		if(err){
			console.log(err);
			next(err);
		} else {
			console.log('seed data included');
			next();
		}
	})

};

exports.down = function(next){
  next();
};

