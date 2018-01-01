//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a4982b265c4de1b984292a9")
  // },{
  //     $set: {
  //       completed: true
  //     }
  // }, {
  //   returnOriginal: false
  // }).then((result => {
  //   console.log(result);
  // }));

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a494528e7962a18ec006752")
  },{
      $set: {
        name: "Ms. Branch"
      },
      $inc: {
        age: 10
      }
  }, {
    returnOriginal: false
  }).then((result => {
    console.log(result);
  }));

  //db.close();
});
