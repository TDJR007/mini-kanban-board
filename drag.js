// drag.js

let draggedTask = null;

const tasks = document.querySelectorAll(".task");
const lanes = document.querySelectorAll(".swim-lane");

// Make each task draggable
function initializeDragAndDelete() {
  document.querySelectorAll(".task").forEach((task) => {
    task.setAttribute("draggable", true);

    task.addEventListener("dragstart", () => {
      draggedTask = task;
      task.classList.add("is-dragging");
    });

    task.addEventListener("dragend", () => {
      task.classList.remove("is-dragging");
      draggedTask = null;
      saveTasks();
    });

    // Add delete button
    if (!task.dataset.hasDeleteBtn) {
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
    }
  });
}

lanes.forEach((lane) => {
  lane.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  lane.addEventListener("drop", (e) => {
    if (!draggedTask) return;
    lane.appendChild(draggedTask);
    saveTasks();
  });
});

// Re-run drag and delete setup when tasks are added dynamically
const observer = new MutationObserver(initializeDragAndDelete);
observer.observe(document.querySelector(".lanes"), {
  childList: true,
  subtree: true,
});

// Initial setup
initializeDragAndDelete();
