const test = require('../models/test.model');
const testModel = require('../models/test.model');

module.exports.getAll = (req, res) => {
  testModel.find({}).exec((error, docs) => {
    if (error) res.json({ error });
    if (docs) res.json(docs);
  });
};

module.exports.insert = (req, res) => {
  testModel.create({}, (error, createdData) => {
    if (error) res.json({ error });
    if (createdData) res.json(createdData);
  });
};

module.exports.update = (req, res) => {
  testModel.updateOne({}, {}, (error, updatedData) => {
    if (error) res.json({ error });
    if (updatedData) res.json(updatedData);
  });
};
