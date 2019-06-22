const contacts = [];

// when user hit "/new_contact"(user send a get request to server), server will respond with contact form.
function newContact(req,res) {
    res.render("contact"); 
}

//when user hit "contacts"(user send a post request to server), i.e. user create/post a request to the server
function createContact(req,res) {
    let { name, email } = req.body; // object decontructuring
    let contact = { name, email } //assign contact to an object with key name & emails, note: shorthand object when key&value are same;
    contacts.push(contact);
    res.render("success");
}

//when user hit "contacts"(user send a get request to server_, server render contacts html);
function index(req,res){
    res.json(contacts);
}

module.exports = {
    newContact,
    createContact,
    index
}
