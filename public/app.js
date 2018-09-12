$(document).ready(function () {
    var data = $.getJSON('/api/todos')
        .then(function(todos){
            listTodos(todos);
    })

    $('#todoInput').change(function () {
        let val = $(this).val();
        let newTodo = {
            name: val
        };
        $.post('api/todos', newTodo)
            .then(function () {
                $('#todoInput').val('');
                addTodo(newTodo);
            })
    })

    $('.list').on('click', 'span', function (el) {
        el.stopPropagation();
        removeTodo($(this).parent());
    })

    $('.list').on('click', 'li', function () {
        updateTodo($(this))
    })
})

function addTodo(todo){
        let newTodo = $('<li class="task">'+ todo.name + '<span>X</span></li>');
        newTodo.data('id', todo._id);
        newTodo.data('completed', todo.comleted);
        if(todo.comleted){
            newTodo.addClass('done');
        }
        $('.list').append(newTodo);
}

function listTodos (todos) {
    todos.forEach(todo => {
        addTodo(todo);
    });
}

function removeTodo(todo) {
    let todoId = todo.data('id');
    let todoUrl = '/api/todos/' + todoId;
    $.ajax({
        method:'DELETE',
        url:todoUrl
    }).then(function(data){
        todo.remove();
    }).catch(function(err){
        console.log(err);
    })
}

function updateTodo(todo){
     let todoUrl = '/api/todos/' + todo.data('id');
     let isDone = !todo.data('completed');
     let updateData = {comleted : isDone}
     $.ajax({
         method: 'PUT',
         url:todoUrl,
         data: updateData
     }).then(function(){
         todo.toggleClass('done');
         todo.data('comleted', isDone)
     })
}
