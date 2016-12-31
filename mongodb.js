/**
 * Created by muhammed on 31/12/16.
 */

var MongoClient = require('mongodb').MongoClient;

var database = 'blog',
  collectionName = 'users',
  connectUrl = 'mongodb://localhost:27017/' + database;

var users = [
  { name: 'Muhammed', country: 'SG' },
  { name: 'Abdul-Qadir', email: 'abdul-qadir@example.com' },
  { name: 'Abdur-Rahman', country: 'IN' },
  { name: 'Abdur-Rahman', country: 'IN' },
  { name: 'Abdullah', email: 'abdullah@example.com' },
];

MongoClient.connect(connectUrl, function(err, db) {
  console.log('Connection Successful');
  insertUsers(db, collectionName, users, getUsers);
});

var insertUsers = function (db, collectionName, users, callback) {
  var collection = db.collection(collectionName);
  collection.insertMany(users, function(err, result) {
    console.log('%d users inserted', result.ops.length);
    console.log(result);
    callback(db, collectionName, showOutputAndCloseConnection);
  });
};

var getUsers = function (db, collectionName, callback) {
  var collection = db.collection(collectionName);
  var users = collection.find({country: "SG"}).toArray(function(err, docs) {
    console.log('Find command completed');
    if (err) {
      console.log('Error in finding users', err);
    }
    callback(db, docs);
  });
}

var showOutputAndCloseConnection = function (db, docs) {
  if (docs.length) {
    console.log('Found the following results for {country: "SG"}: ');
    console.log(docs);
  } else {
    console.log('No results found for {country: "SG"}');
  }
  db.close();
};
