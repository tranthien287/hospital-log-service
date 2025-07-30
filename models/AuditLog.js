const mongoose = require('mongoose');

const AuditLogSchema = new mongoose.Schema({
  user_id: String,
  action: String,
  resource: String,
  details: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AuditLog', AuditLogSchema);
