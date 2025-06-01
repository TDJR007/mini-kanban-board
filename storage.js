function saveTasks() {
  const tasks = [];
  document.querySelectorAll(".task").forEach((task) => {
    const taskText = task.childNodes[0].nodeValue.trim(); // Only the text node
    tasks.push({
      text: taskText,
      lane: task.parentElement.id
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}  

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(({ text, lane }) => {
    const taskElement = createTaskElement(text); // Use utils.js method
    document.getElementById(lane).appendChild(taskElement);
  });
}
  
  function addDragEvents(task) {
    task.addEventListener("dragstart", () => {
      task.classList.add("is-dragging");
    });
  
    task.addEventListener("dragend", () => {
      task.classList.remove("is-dragging");
      saveTasks();
    });
  }
  