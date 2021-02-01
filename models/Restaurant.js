const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    maxlength: [50, 'Only max 50 chars are allowed for the name']
  },
  img: {
    type: String,
    required: false,
  },
  city: { 
      type: Schema.Types.ObjectId, 
      ref: 'City' 
    },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]

});

module.exports = mongoose.model('Restaurant', RestaurantSchema);