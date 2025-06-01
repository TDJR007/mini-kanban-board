const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = todoInput.value.trim();
  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  addDragEvents(newTask);
  todoLane.appendChild(newTask);
  todoInput.value = "";

  saveTasks();
});
