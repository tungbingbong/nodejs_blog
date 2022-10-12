const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Http logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));
//path.join(__dirname, '/resources/views'));

// route to enter the browser
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

// 127.0.0.1 - local host
app.listen(port, () => {
  console.log(`pp listening on port ${port}`)
})