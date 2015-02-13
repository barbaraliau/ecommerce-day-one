var express = require('express'),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose'),
		Customer = require('./lib/models/customers'),
		Order = require('./lib/models/orders'),
		Product = require('./lib/models/products')

var app = express();
var port = 3333;
var mongoURI = 'mongodb://localhost/ecommerce';

//---connect mongoDB----//
mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
	console.log("Connected to db at " + mongoURI);
})

//----middleware---//
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//---endpoints---//

app.post('/api/customers', function(req, res){
	Customer.create(req.body).then(function(response){
		res.status(200).json(response);
	}, function(err){
		res.status(418).json(err);
	})
})

app.post('/api/orders', function(req, res){
	Order.create(req.body).then(function(response){
		res.status(200).json(response);
	}, function(err){
		res.status(418).json(err);
	})
})

app.post('/api/products', function(req, res){
	Product.create(req.body).then(function(response){
		res.status(200).json(response);
	}, function(err){
		res.status(418).json(err);
	})
})


//----listen---//
app.listen(port, function(){
	console.log("Listening on port " + port);
});