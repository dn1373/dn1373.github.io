const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Path to database.json
const dbPath = path.join(__dirname, "database.json");

// Endpoint to get all users
app.get("/users", (req, res) => {
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading the database.");
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Endpoint to add a new user
app.post("/users", (req, res) => {
    const newUser = req.body;

    // Read the database file
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            res.status(500).send("Error reading the database.");
            return;
        }

        // Parse the file content
        const users = JSON.parse(data);

        // Check for duplicate NetID
        if (users.find(user => user.NetID === newUser.NetID)) {
            res.status(400).send("NetID already exists.");
            return;
        }

        // Add the new user and write to the file
        users.push(newUser);
        fs.writeFile(dbPath, JSON.stringify(users, null, 2), (writeErr) => {
            if (writeErr) {
                console.error("Error writing to the file:", writeErr);
                res.status(500).send("Error saving to the database.");
            } else {
                res.status(201).send("User added successfully.");
            }
        });
    });
});

// Serve static files (HTML, JS, CSS)
app.use(express.static(__dirname));

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
