const taskInput = document.querySelector('form');
const taskList = document.getElementById('task-list');
let url = "http://localhost:3000";

const getTask = async () => {
    const url = 'http://localhost:3000/';
    const task = {description: document.querySelector('#add-task-input').value, done: false};
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(task),
        headers: { 
            "Content-Type": "application/json", 
        },
async function getData() {
  try {
    const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();
    return json;
    if (response.ok) {
    let result = await response.json();
    return result;
    } else {
        console.log(`Somehting went wrong: ${error}`);
    }
  } catch (err) {
    console.log(err);
  }
}
const deleteTask = event => event.target.parentNode.remove();
const scratchTask = event => event.target.nextSibling.classList.toggle('scratch');
const addTask = task => {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");
  let deleteButton = document.createElement("button");

  checkBox.type = "checkbox";
  checkBox.className = "checkbox";
  deleteButton.innerText = "🗑";
  deleteButton.className = "delete";
  label.innerText = task.description;
  label.className = "task";

  deleteButton.addEventListener("click", deleteTask);
  checkBox.addEventListener("change", scratchTask)
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  taskList.append(listItem);
}
taskInput.addEventListener('submit', event => {
	event.preventDefault();
    getTask().then(addTask);
});
async function postData(todo) {
  try {
    const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
        "Content-Type": "application/json",
    },
    });
    let result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

async function deleteData(id) {
  try {
    const deleteUrl = `${url}/${id}`;
    const response = await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
      console.log(err);
  }
};