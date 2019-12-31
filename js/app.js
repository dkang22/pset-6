const list = document.getElementById("tasks-list");
const input = document.getElementById("input");
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
                            <span><button class="fa fa-exclamation-circle priority" id="priority-button" job="prioritize"></button></i>
                            <span class="to-do-text" id="task-text">  ${task}  </span>
                            <span><button class="fa fa-check complete" id="complete-button" job="complete"></button></i>
                            <span onclick="removeTask"><button class="fa fa-trash-o remove" id="remove-button" job="remove"></button></i>
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

list.addEventListener("click", function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if (elementJob == "prioritize"){
        prioritizeTask(element);
    } else if (elementJob == "complete"){
        completeTask(element);
    } else if (elementJob == "remove"){
        removeTask(element);
    } else {

    }
});

function prioritizeTask(element) {
    console.log("priority");
}

function completeTask(element) {
console.log("complete");
}

function removeTask(item) {
    console.log("delete");
}
