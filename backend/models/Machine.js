const mongoose = require('mongoose');

const machineSchema = new mongoose.Schema({
  modelName: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String }, 
  specifications: { type: mongoose.Schema.Types.Mixed, default: {} },
  features: { type: [String], default: [] },
  isActive: { type: Boolean, default: true }
}, { strict: false }); // <-- THIS IS THE MAGIC KEY! It forces Mongoose to save everything.

module.exports = mongoose.model('Machine', machineSchema);