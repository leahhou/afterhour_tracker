//app.js is where we organise all our files in the app, yet we usually run the app on index.js

//1. import all packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars"); 
const port=3000;

//2. create an app from express
const app = express();

//3. setup connection to database via mongoose(ODM)
    //tell which mongodb database mongoose connect to
mongoose.connect("mongodb://localhost/contact_app", { useNewUrlParser: true });
    //turn model into promise
mongoose.Promise = global.Promise;
    //mongoose handle error
mongoose.connection.on("error", (error) => console.log(error));

//4. set up template engine
app.engine("handlebars", exphbs({ extname: "hbs", defaultLayout: "main"}));
app.set("view engine", "handlebars");

//5. convert request data into readiable data type json & urlencoded
app.use(express.urlencoded({ extended: false}));
app.use(express.json);

//6. import route from routes.js
require("./routes/routes.js");


//7. listen to port
app.listen(port, ()=>console.log(`Server is running on ${port}`));
