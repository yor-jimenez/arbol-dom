
( () => {
    
const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = '';
    // backticks (comillas invertidas)
    // console.log(checkComplete());
    const taskContent = document.createElement("div");
    
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.appendChild(taskContent);
    // task.innerHTML = content;

    list.appendChild(task);

    // console.log(content);
};

// console.log(btn);

// Arrow functions, funciones flecha o funciones anonimas
btn.addEventListener("click", createTask);
// listener
// click

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
};
// Inmediately invoked function expression IIFE, SON FUNCIONES QUE EN CUANTO SE DECLARAN SE EJECUTAN 
const completeTask = (event) => {
    const element = event.target
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};
})();