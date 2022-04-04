$(document).ready(function() {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");
  const editInput = document.getElementById("edit-input");
  const editTaskBtn = document.getElementById("edit-task-btn");
  
  let todoArr = [];
  let todo_index = null;

  displayTasks();
  
  addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let tasks = localStorage.getItem("tasks");

    if (tasks == null) {
      todoArr = [];
    } else {
      todoArr = JSON.parse(tasks);
    }

    todoArr.push(taskInput.value);
    getTask(taskInput.value, todoArr.length-1);
    taskInput.value = "";
    localStorage.setItem("tasks", JSON.stringify(todoArr));
  },false);

  function displayTasks() {
    let tasks = localStorage.getItem("tasks");

    if (tasks == null) {
      todoArr = [];
    } else {
      todoArr = JSON.parse(tasks);
    }

    todoArr.forEach((list, index) => {
      getTask(list, index);
    });

  }

  function getTask(list, index){
    let main_div = document.createElement("div");
    let p = document.createElement("p");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");

    p.className = "w-300";
    p.innerText = list;
    btn1.innerText = "Edit";
    btn1.onclick = function() { editTask(index) };
    btn1.classList.add("btn", "btn-outline-info", "mr-3");
    btn2.innerText = "Delete";
    btn2.onclick = function() { deleteTask(index) };
    btn2.classList.add("btn", "btn-outline-danger");

    main_div.classList.add("txt", "main_div", "mb-2");
    main_div.id = "task"+index;
    main_div.appendChild(p);
    main_div.appendChild(btn1);
    main_div.appendChild(btn2);

    todoList.appendChild(main_div);
  }

  function deleteTask(index) {
    let tasks = localStorage.getItem("tasks");
    todoArr = JSON.parse(tasks);
    todoArr.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(todoArr));
    document.getElementById("task"+index).remove();
  } 

  function editTask(index) {
    editInput.value = index;
    let tasks = localStorage.getItem("tasks");
    todoArr = JSON.parse(tasks);
    taskInput.value = todoArr[index];
    addTaskBtn.style.display = "none";
    editTaskBtn.style.display = "block";
    todo_index = index;
   }

  editTaskBtn.addEventListener("click", () => {
    let tasks = localStorage.getItem("tasks");
    todoArr = JSON.parse(tasks);
    let id = editInput.value;
    todoArr[id] = taskInput.value;
    var element = document.getElementById("task"+todo_index);
    element.childNodes[0].innerText = taskInput.value;
    addTaskBtn.style.display = "block";
    editTaskBtn.style.display = "none";
    taskInput.value = "";
    localStorage.setItem("tasks", JSON.stringify(todoArr));
  });
});