var mongoose = require("mongoose");

mongoose.Promise = Promise;

// sets up mongoose connection
mongoose.connect("mongodb://localhost/nytReact");

var db = mongoose.connection;

// shows mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// logs a success message when logged into db through mongoose
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

module.exports = db;