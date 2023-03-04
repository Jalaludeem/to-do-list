const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// function to create new task item
function createTask() {
	// create new list item
	const newTask = document.createElement('li');

	// add task text
	const taskText = document.createTextNode(taskInput.value);
	newTask.appendChild(taskText);

	// add delete button
	const deleteBtn = document.createElement('button');
	deleteBtn.className = 'deleteBtn';
	deleteBtn.innerHTML = 'Delete';
	newTask.appendChild(deleteBtn);

	// add new task item to task list
	taskList.appendChild(newTask);

	// reset input value
	taskInput.value = '';

	// add event listener to delete button
	deleteBtn.addEventListener('click', function() {
		taskList.removeChild(newTask);
	});
}

// add event listener to add button
addBtn.addEventListener('click', function() {
	if (taskInput.value !== '') {
		createTask();
	} else {
		alert('Please enter a task');
	}
});

// add event listener to input field to allow adding task by pressing Enter key
taskInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter' && taskInput.value !== '') {
		createTask();
	}
});