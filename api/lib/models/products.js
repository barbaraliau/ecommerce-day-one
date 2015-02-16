var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true},
	status: { type: String, enum: ['Active', 'Inactive'], default: 'Active'},
	createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})


module.exports = mongoose.model('Product', productSchema);