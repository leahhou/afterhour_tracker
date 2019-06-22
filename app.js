//1. import all packages
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars"); 
const port=3000;

//2. create an app from express
const app = express();

//3. set up template engine
app.engine("handlebars", exphbs({ extname: "hbs", defaultLayout: "main"}));
app.set("view engine", "handlebars");

//4. convert request data into readiable data type json & urlencoded
app.use(express.urlencoded({ extended: false}));
app.use(express.json);

//5. import route from routes.js
require("./routes/routes.js");


//6. listen to port
app.listen(port, ()=>console.log(`Server is running on ${port}`));
