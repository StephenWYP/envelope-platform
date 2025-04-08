// Load required modules
const express = require("express"); // Backend web framework
const mysql = require("mysql2");     // MySQL client
const cors = require("cors");       // To allow cross-origin requests
const bodyParser = require("body-parser"); // To parse JSON body

// Create an Express application
const app = express();
const PORT = 8081;

// Use middleware
app.use(cors());                   // Allow frontend from different port
app.use(bodyParser.json());        // Parse incoming request bodies

// Connect to MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "envelopeUser",           // Replace with your MySQL username
  password: "12345678",           // Replace with your MySQL password
  database: "envelope_db" // We'll create this database
});

// Test MySQL connection
db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
    return;
  } else {
    console.log("✅ MySQL connected successfully!");
  }
});

// ---------------- ROUTES -----------------

// GET all envelopes
app.get("/envelopes", (req, res) => {
    const query = "SELECT * FROM envelopes";
  db.query(query, (err, result) => {
    if (err) {
        console.error("Failed to fetch:", err)
        return res.status(500).send("Error fetching data");
    } else {
        res.json(result);
    }
  });
});

// POST: Add a new envelope
app.post("/envelopes", (req, res) => {
  const { name, status, order } = req.body;
  const sql = "INSERT INTO envelopes (name, status, order_num) VALUES (?, ?, ?)";
  db.query(sql, [name, status, order], (err, result) => {
    if (err) {
      res.status(500).send("Error inserting envelope.");
    } else {
      res.status(201).send("Envelope added successfully.");
    }
  });
});

// DELETE: Remove envelope by ID
app.delete("/envelopes/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM envelopes WHERE id = ?", [id], (err, result) => {
    if (err) {
      res.status(500).send("Error deleting envelope.");
    } else {
      res.status(200).send("Envelope deleted.");
    }
  });
});

// Start the backend server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


