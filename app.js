var profile = require("./profile.js");
//global object for node.js, can access current version of node and arguments passed in as a command line
var users = process.argv.slice(2);
//command line arguments can be accessed through argv property on the process object
//console.dir(process.argv);
//var users = ["lindagibson2", "chalkers", "davemcfarland"];
//
//users.forEach(profile.get);


//normally data would be retrieved in order requested, but because node.js retrieves information as they complete the smaller file will show up first
