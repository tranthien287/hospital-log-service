const mongoose = require('mongoose');

const SystemLogSchema = new mongoose.Schema({
  service_name: String,
  level: { type: String, enum: ['INFO', 'WARN', 'ERROR'] },
  message: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SystemLog', SystemLogSchema);
