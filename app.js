// Variables that gives us functionality offered by specific Node.js modules (i.e. packages)
// Think of this as importing specific libraries for specific functionality
// "path" package - navigating folders in our application - useful for joining two paths
// "express" package - access to web server functionality [NB for web servers]
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

//Define a route - a URL that will give us some functionality
// "/" - refers to our landing page
// http://localhost:3000
// http://127.0.0.1:3000
router.get("/", function (req, res) {
   //If a browser gets this request, what should the response be
   res.sendFile(path.join(__dirname + "/views/index.html"));
   //__dirname : It will resolve to your project folder.
});

// Example of adding an additional route
// e.g. https://google.com/about
router.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname + "/views/about.html"));
});

//Add the router
app.use("/", router);
app.listen(process.env.port || 3000); //Port that the server 'listens' on
 
//Serve static files in express
//Specify the location of the static files for the web server
app.use(express.static(path.join(__dirname, "public")));
//then e.g. this will work http://localhost:3000/images/firefox-icon.png
 
console.log("Running at Port 3000");
