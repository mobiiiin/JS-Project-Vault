// Selected
const taskInput = document.querySelector('#task-input');
const prioritySelect = document.querySelector('#priority');
const reminderInput = document.querySelector('#reminder');
const addTaskBtn = document.querySelector('#add-task');
const resetTasksBtn = document.querySelector('#reset-tasks');
const taskList = document.querySelector('#task-list');

// List of tasks
let tasks = [];

// this function just for eventListener
function eventListener() {
    // Add a task with the click of a button
    addTaskBtn.addEventListener('click', addTask);

    // Reset tasks with the click of a button
    resetTasksBtn.addEventListener('click', resetTasks);
}
eventListener()

// Display tasks on the page
function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = `task ${task.completed ? 'completed' : ''}`;

        taskItem.innerHTML = `
      <span>${task.name} (${task.priority})</span>
      <div>
        <button onclick="markTaskAsDone(${index})">Done</button>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

        taskList.appendChild(taskItem);
    });
}

// Add new task
function addTask() {
    const task = {
        name: taskInput.value.trim(),
        priority: prioritySelect.value,
        reminder: reminderInput.value,
        completed: false, 
    };

    if (!task.name) {
        alert("Task name cannot be empty!");
        return;
    }

    tasks.push(task); 
    saveTasksInLocalStorage(); 
    renderTasks(); 
    taskInput.value = ''; 
}

// Edit task
function editTask(index) {
    const task = tasks[index];
    taskInput.value = task.name;
    prioritySelect.value = task.priority;
    reminderInput.value = task.reminder;

    tasks.splice(index, 1); 
    renderTasks(); 
}

// Remove the task
function deleteTask(index) {
    tasks.splice(index, 1); 
    saveTasksInLocalStorage(); 
    renderTasks(); 
}

// Mark the task as done
function markTaskAsDone(index) {
    tasks[index].completed = !tasks[index].completed; 
    saveTasksInLocalStorage(); 
    renderTasks(); 
}

// Reset all tasks
function resetTasks() {
    tasks = []; 
    saveTasksInLocalStorage(); 
    renderTasks();
}

// Save tasks to Local Storage
function saveTasksInLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from Local Storage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
}

// Load tasks on page load
window.onload = loadTasks;
