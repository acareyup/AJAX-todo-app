$(document).ready(function () {
    var data = $.getJSON('/api/todos')
        .then(function(todos){
            listTodos(todos);
        })
})

$('#todoInput').change(function () {
    let val = $(this).val();
    let newTodo = {name: val};
    $.post('api/todos', newTodo)
        .then(function () {
            $(this).val('');
            addTodo(newTodo);
        })
})

function addTodo(todo){
        let el = '<li class="task">'+todo.name + '<span>X</span></li>';
        $('.list').append(el);
}

function listTodos (todos) {
    todos.forEach(todo => {
        addTodo(todo);
    });
}
