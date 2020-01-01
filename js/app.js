const list = document.getElementById("tasks-list");
const input = document.getElementById("input");
let tasksArray = [];
const PRIORITIZED = "fa-exclamation-triangle";
const UNPRIORITIZED = "fa-exclamation-circle";
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const TRASHBIN = "fa-trash-o";
const STRIKETHROUGH = "line-through";
let indexValue = 0;
let elementParent;

function newTask(task, index, priority, complete, remove) {
    task = input.value;
    index = indexValue;
    priority = false;
    complete = false;
    remove = false;

    if(remove){return;}
    const IMPORTANT = priority ? PRIORITIZED : UNPRIORITIZED;
    const DONE = complete ? CHECK : UNCHECK;
    const LINE = complete ? STRIKETHROUGH : "";

    if (input.value == "") {
        //intentially blank
    } else {
        tasksArray.push({
            name: task,
            index: indexValue,
            priority: false,
            complete: false,
            remove: false
        });

        const item =
                          `<li class="item" id="${indexValue}">
                            <span><button class="fa ${IMPORTANT}" id="${indexValue}" job="priority"></button></i>
                            <span class="text ${LINE}">${task}</span>
                            <span"><button class="fa ${DONE}" id="${indexValue}" job="complete"></button></i>
                            <span"><button class="fa fa-trash-o remove" id="${indexValue}" job="remove"></button></i>
                          </li>
                        `;
        list.insertAdjacentHTML("beforeend", item);
        input.value = "";
        indexValue++;
    }
}

document.addEventListener("keyup", function(event){
    if(event.keyCode == 13) {
        if(input.value) {
            newTask(input.value);
        } else {
            //intentially blank
        }
    }
});

list.addEventListener("click", function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if (elementJob == "priority"){
        prioritizeTask(element);
    } else if (elementJob == "complete"){
        completeTask(element);
    } else if (elementJob == "remove"){
        removeTask(element);
    } else {
        //intentially blank
    }
});

function prioritizeTask(element) {
    element = event.target;
    elementParent = element.parentNode.parentNode;

    element.classList.toggle(PRIORITIZED);
    element.classList.toggle(UNPRIORITIZED);

    if (element.classList.contains(PRIORITIZED)) {
        list.prepend(elementParent);
    } else if (element.classList.contains(UNPRIORITIZED)) {
        list.append(elementParent);
    } else {
        //intentially blank
    }

    tasksArray[element.id].priority = tasksArray[element.id].priority ? false : true;
}

function completeTask(element) {
    element = event.target;

    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.parentNode.querySelector(".text").classList.toggle(STRIKETHROUGH);
    tasksArray[element.id].complete = tasksArray[element.id].done ? false : true;
}

function removeTask(element) {
    element = event.target;
    elementParent = element.parentNode.parentNode.parentNode.parentNode;

    elementParent.remove();
    tasksArray[element.id].remove = true;
}
