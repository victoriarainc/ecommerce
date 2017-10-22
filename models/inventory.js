const mongoose = require('mongoose');

// create a reference to Schema
const Schema = mongoose.Schema;

// create a schema for an inventory item
const inventorySchema = new Schema({
  id: {type: String},
  title: {type: String, required: true},
  description: {type: String, required: true},
  notes: {type: String},
  price: {type: String, required: true},
  materials: {type: Array, required: true, default: []},
});

// create a model for a Inventory
const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
