// selete important Element

let newTask = document.querySelector('#new_task');
let addTaskBtn = document.querySelector('.add_taskbtn');
let addTaskContainer = document.querySelector('.addtask_container');
let incompleteContainer = document.querySelector('.incomplete_container');
let completeContainer = document.querySelector('.complete_container');
let completeCheckbox = document.querySelector('.complete_checkbox');

// function

let createTask = function(task){
    let listItem = document.createElement('div');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkbox.type = 'checkbox';
    listItem.className = 'checkbox_container';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    incompleteContainer.appendChild(listItem);
    
    newTask.value = "";
    // bindig function 
    bindInCompleteTask(listItem, completeTask);
}
let completeTask = function(){
    let listItem = this.parentNode;
    console.log(listItem);
    completeContainer.appendChild(listItem);
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'deletebtn';
    listItem.appendChild(deleteBtn);
    console.log(deleteBtn);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    
    
    

    bindCompleteTask(listItem, deleteTask);
}


let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);

}

let bindInCompleteTask = function(taskItem, checkboxClick){
    let checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkboxClick;
}

let bindCompleteTask = function(taskItem, deleteBtnClick){
    let deleteNewBtn = taskItem.querySelector('.deletebtn');
    deleteNewBtn.onclick = deleteBtnClick;
}

addTaskContainer.addEventListener('submit', addTask);