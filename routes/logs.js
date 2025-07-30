const express = require('express');
const router = express.Router();
const SystemLog = require('../models/SystemLog');
const AuditLog = require('../models/AuditLog');

// Tạo log hệ thống
router.post('/system', async (req, res) => {
  try {
    const log = new SystemLog(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Tạo log audit
router.post('/audit', async (req, res) => {
  try {
    const log = new AuditLog(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Lấy log hệ thống
router.get('/system', async (req, res) => {
  try {
    const logs = await SystemLog.find(req.query);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lấy log audit
router.get('/audit', async (req, res) => {
  try {
    const logs = await AuditLog.find(req.query);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
