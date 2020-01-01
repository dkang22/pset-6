const list = document.getElementById("tasks-list");
const input = document.getElementById("input");
let LIST = [];
const CHECK = "fa-check-circle"
const UNCHECK = "fa-circle-thin"
const EXCLAMATION = "fa-exclamation-circle"
const TRASHBIN = "fa-trash-o"
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
    const DONE = complete ? CHECK : UNCHECK;
    const LINE = complete ? STRIKETHROUGH : "";

    if (input.value == "") {
        alert("Please enter a task to-do!");
    } else {
        LIST.push({
            name: task,
            index: indexValue,
            priority: false,
            complete: false,
            remove: false
        });

        indexValue++;

        const item =
                          `<li class="item" id="${index}">
                            <span><button class="fa fa-exclamation-circle priority" id="${index}" job="priority"></button></i>
                            <span class="text ${LINE}">${task}</span>
                            <span"><button class="fa ${DONE}" id="${index}" job="complete"></button></i>
                            <span"><button class="fa fa-trash-o remove" id="${index}" job="remove"></button></i>
                          </li>
                        `;
        list.insertAdjacentHTML("beforeend", item);
        input.value = "";

        let c = LIST.length -1;
        console.log(LIST[c]);
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
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if (elementJob == "priority"){
        prioritizeTask(element);
    } else if (elementJob == "complete"){
        completeTask(element);
    } else if (elementJob == "remove"){
        removeTask(element);
    } else {

    }
});


function prioritizeTask(element) {
    element = event.target;
    elementParent = element.parentNode.parentNode;

    list.prepend(elementParent);

    LIST[element.id].priority = LIST[element.id].priority ? false : true;
}



function completeTask(element) {
    element = event.target;

    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.parentNode.querySelector(".text").classList.toggle(STRIKETHROUGH);

    LIST[element.id].complete = LIST[element.id].done ? false : true;
}

function removeTask(element) {
    element = event.target;
    elementParent = element.parentNode.parentNode.parentNode.parentNode;

    elementParent.remove();

    LIST[element.id].remove = true;
}
