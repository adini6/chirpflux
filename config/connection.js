
require('dotenv').config();
const mongoose = require('mongoose');

const db = mongoose.connection;
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.error(`Connection error: ${err}`));
db.on('disconnected', () => console.log('Disconnected from MongoDB'));

module.exports = db;

