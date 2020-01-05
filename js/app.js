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

        displayList();

        input.value = "";
        indexValue++;
    }
}

function displayList() {
      let clear = document.getElementById("tasks-list");
      clear.innerHTML = "";

      for (let x = 0; x < tasksArray.length; x++) {
          let task = tasksArray[x].name;
          let indexValue = tasksArray[x].index;
          let priority = tasksArray[x].priority;
          let complete = tasksArray[x].complete;
          let remove = tasksArray[x].remove;

          const IMPORTANT = priority ? PRIORITIZED : UNPRIORITIZED;
          const DONE = complete ? CHECK : UNCHECK;
          const LINE = complete ? STRIKETHROUGH : "";

          const item =
                            `
                              <li class="item" id="${indexValue}">
                                <span><button class="fa ${IMPORTANT}" id="${indexValue}" job="priority"></button></span>
                                <span class="text ${LINE}">${task}</span>
                                <span"><button class="fa ${DONE}" id="${indexValue}" job="complete"></button></span>
                                <span"><button class="fa fa-trash-o remove" id="${indexValue}" job="remove"></button></span>
                              </li>
                            `;
          list.insertAdjacentHTML("beforeend", item);
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
    const elementJob = (element.attributes.job ? element.attributes.job.value : null);

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

    const index = tasksArray.indexOf(tasksArray.find(function(el) {
        return el.index == element.id;
    }));

    tasksArray[index].priority = (tasksArray[index].priority ? false : true);

    if (tasksArray[index].priority === true) {
        let movingElement = tasksArray[index];
        tasksArray.splice(index, 1);
        tasksArray.unshift(movingElement);
    } else if (tasksArray[index].priority === false) {
        let movingElement = tasksArray[index];
        tasksArray.splice(index, 1);
        tasksArray.push(movingElement);
    } else {
        //empty
    }

    displayList();
}

function completeTask(element) {
    element = event.target;

    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.parentNode.querySelector(".text").classList.toggle(STRIKETHROUGH);

    const index = tasksArray.indexOf(tasksArray.find(function(el) {
        return el.index == element.id;
    }));

    tasksArray[index].complete = (tasksArray[index].complete ? false : true);
}

function removeTask(element) {
    element = event.target;
    elementParent = element.parentNode.parentNode.parentNode;

    const index = tasksArray.indexOf(tasksArray.find(function(el) {
        return el.index == element.id;
        console.log(element.id);
    }));

    tasksArray.splice(index, 1);
    displayList();
}
