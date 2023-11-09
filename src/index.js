const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const morgan = require('morgan');
const port = 3000;
const route = require('./routes');
const db = require('./config/db/index.db')

// Create an instance of the handlebars engine
const hbs = exphbs.create({ extname: '.hbs' });

// Set the handlebars engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));
console.log(__dirname);
// HTTP logger
app.use(morgan('combined'));

//connect db
db.connect();
//public
app.use(express.static(path.join(__dirname, 'public')));

// Routes
route(app);

app.listen(port, () => {
    console.log(`app listening on port: http://localhost:${port}`);
});
