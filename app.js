var profile = require("./profile.js");

profile.get("chalkers");
profile.get("lindagibson2");
//normally data would be retrieved in order requested, but because node.js retrieves information as they complete the smaller file will show up first
