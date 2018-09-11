var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    name: {
        type:String,
        required:'cannot be empty!'
    },
    comleted:{
        type:Boolean,
        default:false
    },
    created_date:{
        type:Date,
        default:Date.now
    }
})


var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;