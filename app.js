const taskInput = document.querySelector('form');
const taskList = document.getElementById('task-list');

async function doWork() {
  try {
    const result = await getData();
    return result;
  } catch (err) {
    console.log(`Something went wrong: ${err}`);
  }
};

const scratchTask = event => event.target.nextSibling.classList.toggle('scratch');
const deleteTask = function(event) {
    event.target.parentNode.remove();
    let taskToDelete = event.target.parentNode;
    deleteData(taskToDelete.id).then(task => {
        console.log(task);
  });
};
const createTask = task => {
  let listItem = document.createElement('li');
  let checkBox = document.createElement('input');
  let label = document.createElement('label');
  let deleteButton = document.createElement('button');

  listItem.id = task._id;
  checkBox.type = 'checkbox';
  checkBox.className = 'checkbox';
  deleteButton.innerText = '🗑';
  deleteButton.className = 'delete';
  label.innerText = task.description;
  label.className = 'task';

  deleteButton.addEventListener('click', deleteTask);
  checkBox.addEventListener('change', scratchTask)
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  taskList.append(listItem);
}

const processData = result => {
  result.forEach(item => {
    let newLi = document.createElement("li");
    newLi.classList.add('todo-li')
   })
}

const addTask = item => {
  let taskInput = document.getElementById('add-task-input').value;
  if (taskInput === '') {
    alert("Nothing to do... try again!");
    return;
  }
  let taskToAdd = { description: taskInput, done: false };
  postData(taskToAdd).then((task) => createTask(task));
  taskInput.value = '';
}


doWork().then(result => processData(result));
taskInput.addEventListener('submit', event => {
	event.preventDefault();
    addTask();
});