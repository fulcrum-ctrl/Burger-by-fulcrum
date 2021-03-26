const orm = require('./config/orm');
const express = require('express')
const exphbs = require('express-handlebars');
const routes = require('./controllers/burger_controller');
const app = express();
const PORT = process.env.PORT || 8080;

//Setting handlebars as the main view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Setting the app to encode all data from the forms
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Setting the javascript and css files available for use
app.use(express.static('public'));

//Importing routes and giving the server access to them
app.use(routes);

//Creating connection to port
app.listen(PORT, ()=> {
    console.log(`Connected! Listening on port: `, PORT);
});