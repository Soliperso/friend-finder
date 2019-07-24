//Dependencies:
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ path: 'application/vnd.api+json' }));

//ROUTER
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

// Listen to the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});