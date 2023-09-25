
const mongoose = require('mongoose');

const db = mongoose.connection;
mongoose.connect('mongodb://127.0.0.1:27017/chirpflux', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.error(`Connection error: ${err}`));
db.on('disconnected', () => console.log('Disconnected from MongoDB'));

module.exports = db;

