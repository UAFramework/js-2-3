function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  // Clear the contents of the list before creating new items

  list.innerHTML = "";

  // Create task items and add Done and Delete buttons

  todos.forEach((todo) => {
    const todoTask = document.createElement("li");
    todoTask.textContent = todo.task;

    const span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";

    const completeButton = document.createElement("i");
    completeButton.className = "fa fa-check";
    completeButton.addEventListener("click", function () {
      todoTask.style.textDecoration = "line-through";
    });

    const deleteButton = document.createElement("i");
    deleteButton.className = "fa fa-trash";
    deleteButton.addEventListener("click", function () {
      list.removeChild(todoTask);
    });

    span.append(completeButton, deleteButton);
    todoTask.append(span);
    list.appendChild(todoTask);
  });
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript

populateTodoList(todos);
function addNewTodo(event) {
  event.preventDefault();

  const input = document.querySelector("#todoInput");
  const list = document.getElementById("todo-list");

  if (input.value) {
    const todoTask = document.createElement("li");
    todoTask.textContent = input.value;

    const span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";

    const completeButton = document.createElement("i");
    completeButton.className = "fa fa-check";
    completeButton.addEventListener("click", function () {
      todoTask.style.textDecoration = "line-through";
    });

    const deleteButton = document.createElement("i");
    deleteButton.className = "fa fa-trash";
    deleteButton.addEventListener("click", function () {
      list.removeChild(todoTask);
    });

    span.append(completeButton, deleteButton);
    todoTask.append(span);
    list.appendChild(todoTask);

    input.value = "";
  }
}

const addToDoButton = document.querySelector(".btn.btn-primary.mb-3");
addToDoButton.addEventListener("click", addNewTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

function deleteAllCompletedTodos() {
  // Write your code here...
  const list = document.getElementById("todo-list");
  const completedTodos = list.querySelectorAll("li[style*='line-through']");
  completedTodos.forEach((completedTodo) => {
    list.removeChild(completedTodo);
  });
}
