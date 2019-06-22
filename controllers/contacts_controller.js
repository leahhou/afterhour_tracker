
//1. import internal Models 
const ContactModel = require("./../database/models/contact_model");
//2. construct the controllers
// when user hit "/new_contact"(user send a get request to server), server will respond with contact form.
function newContact(req,res) {
    res.render("contact"); //render contact.hbs view form
}

//when user hit "contacts"(user send a post request to server), i.e. user create/post a request to the server
function createContact(req,res) {
    let { name, email } = req.body; // object decontructuring
    let contact = { name, email } //assign contact to an object with key name & emails, note: shorthand object when key&value are same;
    ContactModel.create(contact) //mongoose's method to create new key-value pair into the database via model, instantly convert into a Promise;
    .then(contact=>{
        return res.render("success") //if user's form post successfully, we responde with render succes view
    })
    .catch(err=>{
        return res.status(500).send(`Error:${err}`);
    })
}

//when user hit "contacts"(user send a get request to server_, server render contacts html);
function index(req,res){
    ContactModel.find() //mongoose retrieve info from database via model, again it's a Promise
    .then(contacts=>{ //contacts: name of the Model as we saved in contact_model.js
         return res.json(contacts);
    })
    .catch((err)=>{
        return res.status(500).send(`Error:${err}`);
    })
}


//3. export the controllers for routes.js to use
module.exports = {
    newContact,
    createContact,
    index
}
