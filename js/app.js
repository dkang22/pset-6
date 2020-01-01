const list = document.getElementById("tasks-list");
const input = document.getElementById("input");
let taskArray = [];
const CHECK = "fa-check-circle"
const UNCHECK = "fa-circle-thin"
const EXCLAMATION = "fa-exclamation-circle"
const TRASHBIN = "fa-trash-o"
const STRIKETHROUGH = "lineThrough";
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
        var item = document.createElement("li");
        item.innerHTML =
                          `<li class="item" id="${index}">
                            <span><button class="fa fa-exclamation-circle priority" id="${index}" job="prioritize"></button></i>
                            <span class="to-do-text" id="${index}">  ${task}  </span>
                            <span"><button class="fa fa-check-circle" id="${index}" job="complete"></button></i>
                            <span"><button class="fa fa-trash-o remove" id="${index}" job="remove"></button></i>
                          </li>
                        `;
        list.append(item);
        input.value = "";

        let c = taskArray.length -1;
        console.log(taskArray[c]);
    }
}

document.addEventListener("keyup", function(event){
    if(event.keyCode == 13) {
        if(input.value) {
            newTask(input.value);
        } else {
            alert("Please enter a task to-do!");
        }
    }
});

list.addEventListener("click", function(event){
    var element = event.target;
    var elementJob = element.attributes.job.value;

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


/*
function completeTask(element) {
    console.log("complete");
    element.parentNode.querySelector(".")
}
*/
function removeTask(element) {

    console.log("delete");
    element.parentNode.parentNode.removeChild(element.parentNode);

    taskArray[element.id].trash = true;
}

/*
    var x = this.querySelector("li").id;
        list.remove(list(x));

*/
