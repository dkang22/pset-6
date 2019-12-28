window.onload = function() {
    document.querySelector(".clear") = clear;
    document.getElementById("date") = date;
    document.getElementById("tasks-list") = list;
    document.getElementById("input") = input;
    document.getElementsByClassName("priority").onclick = prioritize;
    document.getElementsByClassName("fa fa-plus-circle").onclick = addTask;
}

let LIST = [];
let id = 0;
LIST = [{}, {}, -];

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

document.addEventListener("keyup", function(event)){
    if(event.keyCode ==13){
        const addTask = input.value;
        if (addTask){
            addTod(toDo, id, false, false);
            LIST.push(
              {
                  name: Task,
                  id: id,
                  done: false,
                  trash: false
              }
            );
            input.value = "";
        }
    }
}

function addTask(task, id, done, trash) {
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    if(trash){
        return;
    }
    const text = `<li class="item">
                      <i class="fa fa-exclamation-circle"></i>
                      <p class="text ${LINE}">  ${task}  </p>
                      <i class="fa ${DONE} complete" job="complete" id="${id}"></i>
                      <i class="fa fa-trash-o delete" job="delete" id="${id}"></i>
                  </li>`

    const position = "beforeend";

    list.insertAdjacentHTML(position, text);
}

function check


/*
let tasker = {
    selectElements: function() {
        this.taskInput = documnent.getElementById("input-task");
        this.taskList = document.getElementById("tasks");
        this.taskListChildren = this.taskList.children;
        this.addButton = document.getElementbyId("add-task-button");
        this.errorMessage = document.getElementById("error");
    },
    buildTask: function() {
        let taskListItem;
        let taskCheckbox;
        let taskValue;
        let taskBUtton;
        let taskTrash;

        taskListItem = document.createElement("li");
        taskListItem.setAttribute("class", "task");

        taskCheckbox = document.createElement("input");
        taskCheckbox.setAttribute("type", "checkbox");

        taskValue = document.createTextNode(this.taskInput.value);

        taskButton = document.createElement("button");

        taskTrash  document.createElement("i");
        taskTrash.setAttribute("class", "fa fa-trash");

        taskButton.appendChild(taskTrash);
        taskListItem.appendChild(taskCheckbox);
        taskListItem.appendChild(taskButton);

        this.taskList.appendChild(taskListItem);
    },
    addTask: function() {
        let taskValue = this.taskInput.value;
        this.buildTask();
        this.taskInput.value = "";
        this.scanTaskList();
    },
    enterKey: function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            this.addTask();
        }
    },
    bindEvents: function() {
        this.addButton.onclick = this.addTask.bind(this);
        this.taskInput.onkeypress = this.enterKey.bind(this);
    }
};


// idea for new tasks
<form action="">
    <input
      type="text"
      class="new list"
      placeholder="enter a new task"
    />
    <button class="button-task"
    aria-label="create new task">+</button>
</form>

//idea for existing tasks
<button class="priority">Prioritize</button>
<label for="task-1">
    work on pset-6
</label>
<button class="completed-task">Checkbox</button>
<button class="deleted-task">Trash Bin</button>
</div>
<div class="tasks">
<button class="priority">Prioritize</button>
<label for="task-2">
    english research project
</label>
<button class="completed-task">Checkbox</button>
<button class="deleted-task">Trash Bin</button>
</div>

*/
