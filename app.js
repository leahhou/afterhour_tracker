//1. import all packages
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars"); 

//2. create an app from express
const app = express();

//3. set up template engine
app.engine("handlebars", exphbs({ extname: "hbs", defaultLayout: "main"}));
app.set("view engine", "handlebars");

//4. convert request data into readiable data type json & urlencoded
app.use(express.urlencoded({ extended: false}));
app.use(express.json);

//5. link to route
const contacts = [];

// when user hit "/new_contact"(send a request to server), server will respond with contact form.
app.get("/new_contact",(req,res)=>{
    res.render("contact"); 

app.post("/contacts", (req,res)=>{

})

app.get("/contacts", (req,res)=>{
    
})





//6. listen to port
app.listen(3000, ()=> {console.log("Server is listening on port 3000")});
