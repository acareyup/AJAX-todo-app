var express = require('express'),
	router = express.Router(),
	db = require('../models'),
	helpers = require('../helpers/todos');

router.get('/', function (req, res) {
	db.Todo.find()
	.then(function(todos){
		res.json(todos);
	})
	.catch(function (err) {
		res.send(err);
	})
});

router.route('/')
	.get(helpers.getTodos)
	.post(helpers.createTodo)

router.route('/:todoId')
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo)

module.exports = router;
