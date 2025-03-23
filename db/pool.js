const { Pool } = require('pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

// Use environment variables for sensitive data
module.exports = new Pool({
  connectionString: connectionString
});