var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var customerSchema = new Schema({
	name:  { type: String, required: true},
  email: { type: String, required: true, unique: true },
  addresses: [{
		billing: {
			street: { type: String, required: true},
			city: { type: String, required: true},
			state: { type: String, required: true},
			zip: { type: String, require: true}
		},
		shipping: {
			street: { type: String, required: true},
			city: { type: String, required: true},
			state: { type: String, required: true},
			zip: { type: String, require: true}
		}
	}],
  phone_number: { type: Number, required: true},
  status: { type: Boolean, required: true},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }

})

module.exports = mongoose.model('Customer', customerSchema);

