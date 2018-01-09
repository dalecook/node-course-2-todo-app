var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {

  if(!ObjectID.isValid(req.params.id)) {
     return res.status(404).send({error: {message:'ID is not valid'}});
  }

  Todo.findById(req.params.id).then((todo) => {
    if(!todo) {
      return res.status(404).send({error: {message:'ID not found'}});
    }
    res.send({todo} );
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) =>{
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.delete('/todos/:id', (req, res) => {

  if(!ObjectID.isValid(req.params.id)) {
     return res.status(404).send({error: {message:'ID is not valid'}});
  }

  Todo.findByIdAndRemove(req.params.id).then((todo) => {
    if(!todo) {
      return res.status(404).send({error: {message:'ID not found'}});
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send(e);
  });

});

app.listen(port, () => {
  console.log(`Started on ${port}`);
});

module.exports = {app};
