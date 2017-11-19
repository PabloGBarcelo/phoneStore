const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PhoneSchema = new Schema({
  name          : { type: String, required: true },
  description   : { type: String, required: true },
  price         : { type: Number, required: true },
  _creator      : { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Phone', PhoneSchema);
