const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection pool
const pool = new Pool({
  user: 'ananda', // Replace with your PostgreSQL username
  host: 'postgres',
  database: 'svg-sports', // Replace with your database name
  password: 'New4postgres', // Replace with your PostgreSQL password
  port: 5432,
});

// Middleware to parse JSON
app.use(express.json());

// Test route to check server status
app.get('/', (req, res) => {
  res.send('PostgreSQL HTTP Server is running!');
});

// Route to fetch all tables in the database
app.get('/tables', async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching tables');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});