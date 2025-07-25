const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // taking refrence from user.model
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  mobile_no: {
    type: String,
    required: true,
    unique: true 
  }
});

module.exports = mongoose.model('UserProfile', profileSchema);
