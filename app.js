var profile = require("./profile.js");
var users = ["chalkers", "lindagibson2"];

users.forEach(profile.get);


//normally data would be retrieved in order requested, but because node.js retrieves information as they complete the smaller file will show up first
