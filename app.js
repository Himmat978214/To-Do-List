let tasks = []

function addTask(){
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if(taskText !== ''){
        tasks.push(taskText);
        displayTasks();
        taskInput.value = '';
    }
}

function displayTasks(){
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = '';
    tasks.forEach((task,index) =>{
        const li = document.createElement("li");
        li.textContent = task;

        const deleteButton = document.createElement('button')
                deleteButton.textContent = 'Delete';
                deleteButton.style.backgroundColor = 'black';
                deleteButton.style.color= 'white';
                deleteButton.style.margin= '5px';
                deleteButton.style.padding= '5px';
                deleteButton.onclick = function(){
                    tasks.splice(index,1)
                    displayTasks()
                }

        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.style.backgroundColor = 'black';
        updateButton.style.color= 'white';
        updateButton.style.margin= '5px';
        updateButton.style.padding= '5px';
        updateButton.onclick = function(){
            const updateTask = prompt('Enter Update task: ',task);
            if(updateTask !== null){
                tasks[index] = updateTask.trim();
                displayTasks();
            }
        }
        li.appendChild(deleteButton);
        li.appendChild(updateButton);

        taskList.appendChild(li);
    });
}
