/*
document.getElementById('addItem').addEventListener('click', function() {
    var value = document.getElementById('input').value;
    if (value) {
        newTask(value);
    } else {
        alert("Please enter a task to-do!");
    }
});

function newTask(task) {
    var newItem = document.createElement('li');
    newItem.innerText = text;

    var icons = document.createElement('div');
    buttons.classList.add('buttons');

    var delete = document.createElement('button');
    remove.classList.add('remove');


}
*/
const list = document.getElementById("tasks-list");
const input = document.getElementById("input");
const PRIORITY_BUTTON = "fa fa-exclamation-circle priority";
const CHECKMARK_BUTTON = "fa fa-check complete";
const DELETE_BUTTON = "fa fa-trash-o remove";
const STRIKE_THROUGH = "lineThrough";
let taskArray = [];
let id = 0;

function newTask(task, index, priority, complete, remove) {
    task = input.value;
    index = id;
    priority = false;
    complete = false;
    remove = false;

    if (input.value == "") {
        alert("Please enter a task to-do!");
    } else {
        taskArray.push({
            name: task,
            index: index,
            priority: false,
            complete: false,
            remove: false
        });
        id++;
        var item = `
                          <li class="item">
                            <span><button class="fa fa-exclamation-circle priority" id="priority-button"></button></i>
                            <span class="to-do-text" id="task-text">  ${task}  </span>
                            <span><button class="fa fa-check complete" id="complete-button"></button></i>
                            <span><button class="fa fa-trash-o remove" id="remove-button"></button></i>
                          </li>
                    `;
        list.insertAdjacentHTML("beforeend", item);
        input.value = "";
    }

}

document.addEventListener("keyup", function(parameter){
    if(event.keyCode == 13) {
        if(input.value) {
            newTask(input.value);
        } else {
            alert("Please enter a task to-do!");
        }
    }
});

function prioritizeTask(element) {

}

function completeTask(element) {

}

function removeTask(element) {

}
