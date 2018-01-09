const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findByIdAndRemove('5a541f93b5bb4b0068d1d1f8').then((todo) => {
//   console.log(todo);
// });

// Todo.findOneAndRemove({_id: '5a541f93b5bb4b0068d1d1f8'}).then((todo) => {
//   console.log(todo);
// });
