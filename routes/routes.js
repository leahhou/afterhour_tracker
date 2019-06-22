//1.import packages
const express = require("express");
//2 import internal files
const { newContact, createContact, index} = require("./../controllers/contacts_controller");

//3. create a route object from express
const router=express.Router();

//4.constructs routes
// when user hit "/new_contact"(user send a get request to server), server will respond with contact form.
router.get("/new_contact", newContact);

//when user hit "contacts"(user send a post request to server), i.e. user create/post a request to the server
router.post("/contacts", createContact);

//when user hit "contacts"(user send a get request to server_, server render contacts html);
router.get("/contacts", index);


//5. export routes using CommonJS syntax.
module.exports = router;