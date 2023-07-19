let draggedItem = null;

function dragStart(event) {
  draggedItem = event.target;
  draggedItem.classList.add('dragging');
}

function dragEnter(event) {
  event.preventDefault();
  event.target.classList.add('dragover');
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.target.classList.remove('dragover');
  if (event.target.classList.contains('kanban-column')) {
    event.target.appendChild(draggedItem);
  }
}

function createTask(btn) {
  const column = btn.parentElement;
  const taskName = prompt('Digite o nome da nova task:');
  if (taskName) {
    const newTask = document.createElement('div');
    newTask.classList.add('kanban-task');
    newTask.draggable = true;
    newTask.innerText = taskName;
    newTask.addEventListener('dragstart', dragStart);
    column.insertBefore(newTask, btn);
  }
}
