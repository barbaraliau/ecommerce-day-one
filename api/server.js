var express = require('express'),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose'),
		// migrate = require('migrate'),
		CustomerCtrl = require('./lib/controllers/CustomerCtrl'),
		OrderCtrl = require('./lib/controllers/OrderCtrl'),
		ProductCtrl = require('./lib/controllers/ProductCtrl')

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

app.post('/api/customers', CustomerCtrl.post);
app.get('/api/customers', CustomerCtrl.get);
app.get('/api/customers/:id', CustomerCtrl.getCustomer);
// app.delete('/api/customers/delete/:id', CustomerCtrl.deleteCustomer)

app.post('/api/orders', OrderCtrl.post);

app.post('/api/products', ProductCtrl.post);
app.get('/api/products', ProductCtrl.get);


//----listen---//
app.listen(port, function(){
	console.log("Listening on port " + port);
});