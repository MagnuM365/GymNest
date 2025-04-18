const express = require("express");
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MagnuM@365', // Replace with your actual password
    database: 'fitness'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to database');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        // Check if the user already exists
        const [existingUser] = await db.promise().query('SELECT * FROM users WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            return res.status(409).json({ message: "Username already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store the new user in the database
        await db.promise().query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({ message: "Failed to register user" });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        // Retrieve the user from the database
        const [users] = await db.promise().query('SELECT * FROM users WHERE username = ?', [username]);

        if (users.length === 0) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const user = users[0];

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Consider using a session or JWT for user authentication here
        return res.status(200).json({ userId: user.id, username: user.username });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Login failed" });
    }
});

app.get('/profile', async (req, res) => {
    const userId = req.query.userId; // Assuming you're passing userId as a query parameter

    if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
    }

    try {
        // Retrieve the user from the database
        const [users] = await db.promise().query('SELECT id, username FROM users WHERE id = ?', [userId]);

        if (users.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const user = users[0];

        // Retrieve purchase history (replace with your actual logic)
        const [history] = await db.promise().query('SELECT * FROM purchase_history WHERE user_id = ?', [userId]); // Replace with your actual table and query
        const purchaseHistory = history.map(h => ({ productName: h.product_name, date: h.purchase_date })); // Adjust according to your table structure

        return res.status(200).json({
            id: user.id,
            username: user.username,
            purchaseHistory: purchaseHistory,
        });
    } catch (error) {
        console.error("Profile error:", error);
        return res.status(500).json({ message: "Failed to retrieve profile data" });
    }
});
app.listen(8081, () => {
    console.log("Listening on port 8081");
});