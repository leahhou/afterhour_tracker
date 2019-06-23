//1.import packages
const express = require("express");
//2 import internal files
const contactRoutes = require("./contacts_routes");

//3. create a route object from express
const router=express.Router();

//4.constructs routes
// router.use: 
    //This method on the router allows us to prepend a string to all of the routes
    // being referenced in this method. We can take advantage of this so that we can 
    //cleanup our author routes!
router.use("/contacts", contactRoutes); // import full CRUD on all authorRoutes;



//5. export routes for app.js to use using CommonJS syntax.
module.exports = router;