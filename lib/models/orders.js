var mongoose = require('mongoose');
var Product = require('./products');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
	customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
	// addresses: [{
	// 	billing: {
	// 		street: { type: String, required: true},
	// 		city: { type: String, required: true},
	// 		state: { type: String, required: true},
	// 		zip: { type: String, require: true}
	// 	},
	// 	shipping: {
	// 		street: { type: String, required: true},
	// 		city: { type: String, required: true},
	// 		state: { type: String, required: true},
	// 		zip: { type: String, require: true}
	// 	}
	// }],
	// paymentType: { type: String, enum: ['Credit Card', 'Paypal']},
	products: [Product.productSchema]
	// numProducts: {type: Number, required: true},
	// subtotal: { type: Number, required: true },
	// salesTax: { type: Number, required: true},
	// totalCost: { type: Number, required: true},
	// createdAt: { type: Date, default: Date.now },
 //  updatedAt: { type: Date, default: Date.now },
 //  status: { type: String, enum:['In Process', 'Ordered', 'Shipped', 'Complete']}


})



module.exports = mongoose.model('Order', orderSchema)
