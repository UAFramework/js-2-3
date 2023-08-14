function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  todos.forEach(todo => {
    let li = document.createElement('li');
    li.innerText = todo.task;

    let span = document.createElement('span');
    span.classList.add('badge', 'bg-primary', 'rounded-pill');

    ['fa-check', 'fa-trash'].forEach(iCssClass => {
      let i = document.createElement('i');
      i.classList.add('fa');
      i.classList.add(iCssClass)
      i.setAttribute("aria-hidden", "true");
      i.addEventListener('click', function(event) {
        event.target.closest('li').classList.toggle('crossed-text');
      });
      span.appendChild(i);
    });

    li.appendChild(span);
    list.appendChild(li);
  });
}

function addNewTodo(event) {
  event.preventDefault();
  let value = document.getElementById('todoInput').value;
  if (value === '') {
    alert('Value can not be empty');
    return;
  }
  document.getElementById('todoInput').value = '';

  populateTodoList([{
    task: value,
    completed: false,
  }]);
}

function deleteAllCompletedTodos(event) {
  event.preventDefault();

  let liElements = document.querySelectorAll("#todo-list li");

  let filteredItems = Array.from(liElements).filter(li => {
    return li.classList.contains("crossed-text");
  });

  filteredItems.forEach(item => {
    item.remove();
  });
}

let addButton = document.querySelector('.btn-primary');
addButton.addEventListener('click', addNewTodo);

let removeButton = document.getElementById('remove-all-completed');
removeButton.addEventListener('click', deleteAllCompletedTodos);

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);
