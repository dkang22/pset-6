
const list = document.getElementById("tasks-list");
const input = document.getElementById("input");
const PRIORITY_BUTTON = "fa fa-exclamation-circle";
const CHECKMARK_BUTTON = "fa fa-check complete";
const DELETE_BUTTON = "fa fa-trash-o delete";
const STRIKE_THROUGH = "lineThrough";

function newTask(task) {
    var item = `
                      <li class="item">
                        <span><button class="fa fa-exclamation-circle" id="0"></button></i>
                        <p class="to-do-text"> ${task} </p>
                        <span><button class="fa fa-check complete" id="0"></button></i>
                        <span><button class="fa fa-trash-o delete" id="0"></button></i>
                      </li>
                  `;
    list.insertAdjacentHTML("beforeend", item);

}

newTask("haha");

//onclick="newTask()" href="javascript:void(0);"

/* maybe this will work
let list = [];

//CREATING A NEW TASK
function newTask() {
//text
    var listElement = document.createElement("li");
    var inputedTask = document.getElementById("input").value;
    var text = document.createTextNode(inputedTask);
    listElement.appendChild(text);
    if (inputedTask === "") {
        alert("Please enter a task!")
    } else {
        document.getElementById("tasks-list").appendChild(listElement);
    }
    document.getElementById("input").value = "";
//priority button
    var span = document.createElement("SPAN");
    var priorityButton = document.createTextNode("fa fa-exclamation-circle");


}

/*
<li class="item">
  <i class="fa fa-exclamation-circle"></i>
  <p class="to-do-text">Complete p-set6</p>
  <i class="fa fa-check complete"></i>
  <i class="fa fa-trash-o delete"></i>
</li>

/*
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

/*
                    <li class="item">
                      <i class="fa fa-exclamation-circle"></i>
                      <p class="to-do-text">Complete p-set6</p>
                      <i class="fa fa-check complete"></i>
                      <i class="fa fa-trash-o delete"></i>
                    </li>
*/
