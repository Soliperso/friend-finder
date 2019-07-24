//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ path: 'application/vnd.api+json' }));

//ROUTER
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Listen to the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});