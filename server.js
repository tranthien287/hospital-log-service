const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const logRoutes = require('./routes/logs');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/logs', logRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Log Service running on port ${PORT}`));
