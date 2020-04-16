var url = "mongodb://localhost:27017/";
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbop = db.db("mydb");
  var myquery = { movie: "The Banker"  year: 2020, rating: 8};
  var newvalues = { $set: { movie: "The Grudge", year: 2020, rating: 9 } };

  dbop.collection("myMovies").updateOne(oldMovie, newMovie, function (err, res) {
    if (err) throw err;

    dbo.collection("myMovies").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
      });
    db.close();
  });
});