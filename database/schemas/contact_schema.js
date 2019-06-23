//Everything in Mongoose starts with a Schema. 
//Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
//&any validation we would like to apply and default values as well.

//1. import mongoose package;
const mongoose = require("mongoose");

//2. create an schema object from mongoose (using mongoose.Schema constructor);

const Schema = mongoose.Schema;
//3. instantiate a new instance/object from mongoose.Schema constructor;
const ContactSchema = new Schema({
    name: { // each key should be consistent with the name attribute of input in the html form
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})

//4. export the schema for model to use;
module.exports = ContactSchema;