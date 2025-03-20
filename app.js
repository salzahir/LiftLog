const express = require('express');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

const controller = require('./controllers/controller');

const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.set('view',path.join(__dirname,'views'));
app.set('view engine','ejs');

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});