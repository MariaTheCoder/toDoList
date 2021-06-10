const toDoList = document.getElementById("list");
const inputField = document.getElementById("input");
const addBtn = document.getElementById("add_btn");

const todos = ['laundry', 'grocery shopping', 'study coding', 'call mom'];

//This is how I would code the view to-do list up until now. 
// My goal is to instead use HTTP requests. 

for (let i = 0; i < todos.length; i++) {
    const element = todos[i];

    const newTask = document.createElement("li")
    newTask.innerHTML = element;
    toDoList.appendChild(newTask);
}

//This is how I would code the add task to to-do list up until now. 
// My goal is to instead use HTTP requests. 

addBtn.addEventListener("click", function() {
    if(!inputField.value) return alert("Please input a value");
    if(todos.find(task => task === inputField.value)) return alert("task is already on the list");
   
    const newTask = document.createElement("li")
    newTask.innerHTML = inputField.value;
    toDoList.appendChild(newTask);
    todos.push(inputField.value);
});

