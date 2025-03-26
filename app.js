const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
const PORT = process.env.PORT || 3000;
const routes = require('./routes/routes');
app.use('/', routes);

// Set up views
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// Serve static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});