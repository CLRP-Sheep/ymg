//models/Expense.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var recordSchema = new Schema({
  recordID: Number,
  authorUserID: Number,
  groupID: String,
  savedDate: {type: Date, default: Date.now},
  //below are optionals
  title: String,
  url: String,
  location: String,
  imageAddress: [String, String, String],
  endDate: Date,
  defaultTagging: [Boolean, Boolean, Boolean, Boolean, Boolean, Boolean],
  freeTagging: String, //should be array 
});
module.exports = mongoose.model('Record', recordSchema);
