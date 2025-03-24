const express = require('express');
const app = express();
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({extended: false}));


const PORT = process.env.PORT || 3000;
const routes = require('./routes/routes');
app.use('/', routes);

const path = require('path');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});