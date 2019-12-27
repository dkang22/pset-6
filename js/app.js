


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
*/
