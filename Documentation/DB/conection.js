function connectMongo(){
  var MongoClient = require('mongodb').MongoClient;
  console.log('MongoClient is',typeof MongoClient)
  var myCollection;
  var url = 'mongodb://127.0.0.1:27017';
  var db = MongoClient.connect(url, function(err, db) {
    if(err){
      console.log("mongoerror", err);
      throw err;
    }
    console.log("connected to the mongoDB!");
    myCollection = db.collection('test_collection');
  });
}
connectMongo()