var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/kelvinakpobome";

MongoClient.connect(url, function(err, db) {

if (err) throw err;

console.log("Database created by Kelvinakpobome");

db.close();

});