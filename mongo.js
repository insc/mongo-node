var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://lipi:27017/mymongo';

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log('Database created!');
  db.close();
});
