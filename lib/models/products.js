var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true},
	status: { type: String, enum: ['Active', 'Inactive'], default: 'Active'}
})


module.exports = mongoose.model('Product', productSchema);