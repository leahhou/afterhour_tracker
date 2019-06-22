//schemas is compiling into a Model. A model is a class with which we construct documents.


//1. import mongoose package;
const mongoose=require("mongoose");

//2. import relevant Schema;
const ContactSchema = require("./../schemas/contact_schema");

//3. construct model using mongoose method: mongoose.model(modelName, schema);
const ContactModel = mongoose.model("contact", ContactSchema);

//4. export model for controllers to use;
module.exports = ContactModel;