const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
  test: String,
});

const test = mongoose.model('test', testSchema);
module.exports = test;
