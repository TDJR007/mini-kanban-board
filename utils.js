function createTaskElement(text) {
    const task = document.createElement("p");
    task.classList.add("task");
    task.setAttribute("draggable", "true");
    task.innerText = text;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "✖";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      task.remove();
      saveTasks();
    });
  
    task.appendChild(deleteBtn);
    task.dataset.hasDeleteBtn = "true";
  
    return task;
  }
  